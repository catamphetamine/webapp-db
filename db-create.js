import API from '.'
import configuration from './configuration'

async function initializeDatabase(configuration) {
	const api = new API(configuration)
	await api.db.reset()
}

initializeDatabase(configuration[process.env.NODE_ENV])
	.then(() => process.exit())
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})