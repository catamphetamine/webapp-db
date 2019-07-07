import { DataTypes } from 'sequelize'

export default {
	properties: {
		type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		mimeType: {
			type: DataTypes.STRING,
			allowNull: false
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		latitude: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		longitude: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		data: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	},
	associate(models) {
		models.Attachment.belongsTo(models.Post, {
			foreignKey: {
				allowNull: true
			},
			onDelete: 'restrict',
			onUpdate: 'restrict'
		})
	}
}