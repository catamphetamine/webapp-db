import Sequelize, { Op } from 'sequelize'

import * as models from './models'

export default class Database {
	// Shortcut for "and", "or", etc.
	Op = Op

	constructor(configuration) {
		// Initialize database connection.
		this.sequelize = new Sequelize(configuration)

		// Define models.
		for (const modelName of Object.keys(models)) {
			const model = models[modelName]
			this[modelName] = this.sequelize.define(
				modelName[0].toLowerCase() + modelName.slice(1),
				model.properties, {
					indexes: model.indexes || []
				}
			)
		}

		// Associate models.
		for (const modelName of Object.keys(models)) {
			const model = models[modelName]
			if (model.associate) {
				model.associate(this)
			}
		}
	}

	async close() {
		await this.sequelize.close()
	}

	async reset() {
		await this.sequelize.sync({
			force: true,
			match: /-(test|dev)$/
		})
	}
}