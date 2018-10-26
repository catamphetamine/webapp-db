import Sequelize, { Op } from 'sequelize'

import * as models from '../models'

export default class Database {
	// Shortcut for "and", "or", etc.
	static Op = Op

	constructor(configuration) {
		this.configuration = configuration
	}

	init() {
		if (this.initialized) {
			return
		}

		// Initialize database connection.
		this.sequelize = new Sequelize(this.configuration)

		// Define models.
		for (const modelName of Object.keys(models)) {
			this[modelName] = this.sequelize.define(
				modelName[0].toLowerCase() + modelName.slice(1),
				models[modelName].properties
			)
		}

		// Associate models.
		for (const modelName of Object.keys(models)) {
			if (models[modelName].associate) {
				models[modelName].associate(this)
			}
		}

		this.initialized = true
	}

	async reset() {
		await this.sequelize.sync({
			force: true,
			match: /-test$/
		})
	}
}