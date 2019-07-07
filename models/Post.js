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
		// "Denormalized" attachments.
		// (so that it doesn't JOIN every time)
		attachments: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	},
	// indexes: [{
	// 	fields: ['createdAt']
	// }],
	indexes: [{
		fields: ['accountId', 'createdAt']
	}],
	associate(models) {
		models.Post.belongsTo(models.Account, {
			foreignKey: {
				allowNull: false,
				// name: 'accountId'
			},
			// as: 'author',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		})
	}
}