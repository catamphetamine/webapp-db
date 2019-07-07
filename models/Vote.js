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
			foreignKey: {
				allowNull: false
			},
			onDelete: 'restrict',
			onUpdate: 'restrict'
		})
		models.Vote.belongsTo(models.Post, {
			foreignKey: {
				allowNull: false
			},
			onDelete: 'restrict',
			onUpdate: 'restrict'
		})
	}
}