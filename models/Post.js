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
	// indexes: [{
	// 	fields: ['createdAt']
	// }],
	indexes: [{
		fields: ['authorId', 'createdAt']
	}],
	associate(models) {
		models.Post.belongsTo(models.Account, {
			foreignKey: {
				allowNull: false,
				name: 'authorId'
			},
			as: 'author',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		})
	}
}