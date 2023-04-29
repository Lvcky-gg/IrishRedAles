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
      Review.hasMany(models.ReviewLike, {foreignKey:'reviewId',onDelete:'CASCADE'})
    }
  }
  Review.init({
    ownerId: DataTypes.INTEGER,
    breweryId: DataTypes.INTEGER,
    rating: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        isValid(val){
          if(val < 1){
            throw new Error("rating is required.")
          }
        }
      },
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isGreaerThanThre(str){
          if(str.length < 3){
            throw new Error("Review must be three or more characters")
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};