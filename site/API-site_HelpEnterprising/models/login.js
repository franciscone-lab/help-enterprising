'use strict';

module.exports = (sequelize, DataTypes) => {
  let Login = sequelize.define('Login', {
    idLogin : {
      field: 'idLogin',
      type: DataTypes.INTEGER,
      primaryKey: true,
			autoIncrement: true
    }, 

    usuarioLogin : {
      field: 'usuarioLogin',
      type: DataTypes.STRING,
      allowNull: false
    }, 

    senhaLogin : {
      field: 'senhaLogin',
      type: DataTypes.STRING,
      allowNull: false
    }

  }, 
  {
    tableName: 'login',
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  });
  
  return Login;
}