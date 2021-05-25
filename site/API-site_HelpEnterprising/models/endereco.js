'use strict';

module.exports = (sequelize, DataTypes) => {
  let Endereco = sequelize.define('Endereco', {
    idEndereco: {
      field: 'idEndereco',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    ruaEndereco: {
      field: 'ruaEndereco',
      type: DataTypes.STRING,
      allowNull: true
    },

    numeroEndereco: {
      field: 'numeroEndereco',
      type: DataTypes.INTEGER,
      allowNull: true
    },

    cepEndereco: {
      field: 'cepEndereco',
      type: DataTypes.STRING,
      allowNull: true
    },

    complementoEndereco: {
      field: 'complementoEndereco',
      type: DataTypes.STRING,
      allowNull: true
    },

    fkEmpresa: {
      field: 'fkEmpresa',
      type: DataTypes.INTEGER,
      allowNull: true,
      foreignKey: true
    }
  },
    {
      tableName: 'endereco',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    });

  return Endereco;
}