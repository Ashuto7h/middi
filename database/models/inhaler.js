'use strict';
const {
  Model
} = require('sequelize');
const Puff = require('./puff');
const { Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inhaler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Inhaler.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    sequelize,
    modelName: 'Inhaler',
  });

  Inhaler.hasMany(Puff(sequelize, Sequelize.DataTypes));

  return Inhaler;
};