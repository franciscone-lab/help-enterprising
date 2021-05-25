'use strict';

module.exports = (sequelize, DataTypes) => {
  let Telefone = sequelize.define('Telefone', {
    idTelefone: {
      field: 'idTelefone',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    dddTelefone: {
      field: 'dddTelefone',
      type: DataTypes.STRING,
      allowNull: false
    },

    numeroTelefone: {
      field: 'numeroTelefone',
      type: DataTypes.STRING,
      allowNull: false
    },

    fkUsuario: {
      field: 'fkUsuario',
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  },
    {
      tableName: 'telefone',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    });

  return Telefone;
}