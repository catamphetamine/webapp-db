import { DataTypes } from 'sequelize'

export default {
	properties: {
		idAlias: {
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
		models.Account.belongsTo(models.User, {
			foreignKey: {
				allowNull: true
			},
			onDelete: 'restrict',
			onUpdate: 'restrict'
		})
	}
}