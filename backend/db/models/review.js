'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {foreignKey:'ownerId'})
      Review.belongsTo(models.Brewery, {foreignKey:'breweryId'})
      Review.hasMany(models.ReviewLike, {foreignKey:'reviewId'})
    }
  }
  Review.init({
    ownerId: DataTypes.INTEGER,
    breweryId: DataTypes.INTEGER,
    rating: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[3,255]
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};