'use strict';

module.exports = (sequelize, DataTypes) => {
  let Endereco = sequelize.define('Empresa', {
    idEndereco: {
      field: 'idEndereco',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    ruaEndereco: {
      field: 'ruaEndereco',
      type: DataTypes.STRING,
      allowNull: false
    },

    numeroEndereco: {
      field: 'numeroEndereco',
      type: DataTypes.INTEGER,
      allowNull: false
    },

    cepEndereco: {
      field: 'cepEndereco',
      type: DataTypes.STRING,
      allowNull: false
    },

    complementoEndereco: {
      field: 'complementoEndereco',
      type: DataTypes.STRING,
      allowNull: true
    },

    fkEmpresa: {
      field: 'fkEmpresa',
      type: DataTypes.INTEGER,
      allowNull: false,
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