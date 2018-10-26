import API from '..'
import configuration from '../configuration'

async function initializeDB(configuration) {
	const api = new API(configuration)
	await api.db.reset()
}

initializeDB(configuration.test)
	.then(() => process.exit())
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})