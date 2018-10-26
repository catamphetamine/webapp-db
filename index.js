import DB from './api/db'

export default class API {
	constructor(configuration) {
		this._db = new DB(configuration.database)
	}

	get db() {
		this._db.init()
		return this._db
	}

	set db(value) {
		this._db = value
	}
}