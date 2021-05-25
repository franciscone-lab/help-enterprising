'use strict';

module.exports = (sequelize, DataTypes) => {
  let faleConosco = sequelize.define('faleConosco', {
    tituloFaleConosco: {
      field: 'tituloFaleConosco',
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
      tableName: 'feleConosco',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    }
  );

  return faleConosco;
}