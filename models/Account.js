import { DataTypes } from 'sequelize'

export default {
	properties: {
		nameId: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		data: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	},
	associate(models) {
		models.Account.hasMany(models.Post)
		models.Account.belongsTo(models.User, {
			foreignKey: {
				allowNull: true
			}
		})
	}
}