import { DataTypes } from 'sequelize'

export default {
	properties: {
		title: {
			type: DataTypes.STRING,
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		attachments: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	},
	indexes: [{
		fields: ['createdAt']
	}],
	associate(models) {
		models.Post.belongsTo(models.Account)
	}
}