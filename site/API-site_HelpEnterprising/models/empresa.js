'use strict';

module.exports = (sequelize, DataTypes) => {
  let Empresa = sequelize.define('Empresa', {
    idEmpresa: {
      field: 'idEmpresa',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    cnpjEmpresa: {
      field: 'cnpjEmpresa',
      type: DataTypes.STRING,
      allowNull: false
    },

    nomeFantasiaEmpresa: {
      field: 'nomeFantasiaEmpresa',
      type: DataTypes.STRING,
      allowNull: false
    },

    fkUsuario: {
      field: 'fkUsuario',
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    }
  },
    {
      tableName: 'empresa',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    });

  return Empresa;
}