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
			onDelete: 'restrict'
		})
		models.Vote.belongsTo(models.Post, {
			onDelete: 'restrict'
		})
	}
}