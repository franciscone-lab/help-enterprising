'use strict';

module.exports = (sequelize, DataTypes) => {
  let faleConosco = sequelize.define('faleConosco', {
    idFaleConosco: {
      field: 'idFaleConosco',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    tituloFaleConosco: {
      field: 'tituloFaleConosco',
      type: DataTypes.STRING,
      allowNull: false
    },

    duvidaFaleConosco: {
      field: 'duvidaFaleConosco',
      type: DataTypes.STRING,
      allowNull: false
    },

    fkUsuario: {
      field: 'fkUsuario',
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    }
  },
    {
      tableName: 'faleConosco',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    }
  );

  return faleConosco;
}