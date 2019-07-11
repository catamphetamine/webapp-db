import DB from '.'
import configuration from './configuration'

async function initializeDatabase(configuration) {
	const db = new DB(configuration)
	await db.reset()
}

initializeDatabase(configuration[process.env.NODE_ENV])
	.then(() => process.exit())
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})