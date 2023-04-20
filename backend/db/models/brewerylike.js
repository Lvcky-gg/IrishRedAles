'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BreweryLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BreweryLike.belongsTo(models.User, {foreignKey:'userId'})
      BreweryLike.belongsTo(models.Brewery, {foreignKey:'breweryId'})
    }
  }
  BreweryLike.init({
    userId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BreweryLike',
  });
  return BreweryLike;
};