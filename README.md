## Install

```
git clone git@github.com:catamphetamine/webapp-db.git
cd webapp-db
npm install
```

Install [MySQL](https://dev.mysql.com/downloads/) and a GUI for it (for example, [HeidiSQL](https://www.heidisql.com/download.php)).

Create `webapp-test` database and user `webapp` with no password.

Create `configuration.json` file (it is excluded from the repo because it contains passwords):

```json
{
	"test": {
		"username": "webapp",
		"database": "webapp-test",
		"dialect": "mysql",
		"logging": false
	},
	"development": {
		"host": "...",
		"port": "...",
		"username": "...",
		"password": "...",
		"dialect": "mysql",
		"database": "webapp-dev",
		"logging": false
	},
	"production": {
		// Production database config.
	}
}
```

Test:

```
npm test
```

## Seed

Create a new `webapp-dev` database in MySQL.

Then initialize it by creating the tables:

```
npm run dev:db:init
```

Then "seed" the database with some demo data:

```
npm run dev:db:seed
```