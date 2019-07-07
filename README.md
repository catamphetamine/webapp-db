Install
=======

```
npm install
```

Install MySQL, and a GUI for it (for example, HeidiSQL).

Create `webapp-test` database and user `webapp` with no password.

Create `configuration.json` file (is excluded from the repo because it holds passwords). Example:

```json
{
	"test": {
		"database": {
			"username": "webapp",
			"database": "webapp-test",
			"dialect": "mysql",
			"logging": false
		}
	},
	"dev": {
		"database": {
			"host": "...",
			"port": "...",
			"username": "root",
			"database": "webapp-dev",
			"dialect": "mysql",
			"logging": false
		}
	},
	"prod": {
		// ...
	}
}
```

Test:

```
npm test
```

Then create `webapp-dev` database and initialize it:

```
npm run dev:db:init
```