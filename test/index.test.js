import API from '..'
import configuration from '../configuration'

describe('API', () => {
	it('should work', () => {
		const api = new API(configuration.test)
		expect(api.db.sequelize.modelManager.models.map(_ => _.name)).to.include('account')
	})
})