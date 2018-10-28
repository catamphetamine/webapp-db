import DB from './api/db'

export default class API {
	constructor(configuration) {
		this.configuration = configuration
	}

	get db() {
		if (!this._db) {
			this._db = new DB(this.configuration.database)
		}
		return this._db
	}
}