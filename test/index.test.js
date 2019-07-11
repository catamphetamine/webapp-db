import DB from '..'
import configuration from '../configuration'

describe('DB', () => {
	it('should work', () => {
		const db = new DB(configuration.test)
		expect(db.sequelize.modelManager.models.map(_ => _.name)).to.include('account')
	})
})