import { DataTypes } from 'sequelize'

export default {
	properties: {
		value: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	},
	associate(models) {
		models.Vote.belongsTo(models.Account, {
			onDelete: 'restrict',
			onUpdate: 'restrict'
		})
		models.Vote.belongsTo(models.Post, {
			onDelete: 'restrict',
			onUpdate: 'restrict'
		})
	}
}