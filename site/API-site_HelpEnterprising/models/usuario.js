'use strict';
/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Usuario = sequelize.define('Usuario', {
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},

		nomeUsuario: {
			field: 'nomeUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},

		cpfUsuario: {
			field: 'cpfUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},

		emailUsuario: {
			field: 'emailUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},

		cargoUsuario: {
			field: 'cargoUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},

		sexoUsuario: {
			field: 'sexoUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},

		fkLogin: {
			field: 'fkLogin',
			type: DataTypes.STRING,
			foreignKey: true,
			allowNull: false
		},

	},
		{
			tableName: 'usuario',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});


	return Usuario;
};
