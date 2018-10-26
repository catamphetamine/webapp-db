import { DataTypes } from 'sequelize'

export default {
	properties: {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	},
	associate(models) {
		models.Post.belongsTo(models.Account)
	}
}