'use strict';

module.exports = (sequelize, DataTypes) => {
  let Post = sequelize.define('Post', {
    idPost: {
      field: 'idPost',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    tituloPost: {
      field: 'tituloPost',
      type: DataTypes.STRING,
      allowNull: false
    },

    textoPost: {
      field: 'textoPost',
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
      tableName: 'post',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    });

  return Post;
}