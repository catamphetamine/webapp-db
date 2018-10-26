import { DataTypes } from 'sequelize'

export default {
	properties: {
		firstName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		middleName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		phoneExt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		birthDate: {
			type: DataTypes.DATE,
			allowNull: true
		}
	},
	associate(models) {
		models.User.hasOne(models.Account)
	}
}