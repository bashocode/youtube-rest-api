'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Char extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Char.init({
    name: DataTypes.STRING,
    element: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Char',
    tableName: 'chars',
  });
  return Char;
};
