'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brewery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brewery.belongsTo(models.User, {foreignKey:'ownerId'})
      Brewery.hasMany(models.Review, {foreignKey:'breweryId'})
      Brewery.hasMany(models.BreweryLike, {foreignKey:'breweryId'})
    }
  }
  Brewery.init({
    ownerId: DataTypes.INTEGER,
    breweryName: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[5, 50]
      }
    },
    addressLineOne:{
      type:DataTypes.STRING,

    },
    city:{
      type:DataTypes.STRING,
    },
    description: DataTypes.STRING,
    zip: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[4,8]
      }
    },
    state: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isShortEnough(string){
          if(string.length > 30){
            throw new Error("State must be less than 30 characters")
          }
        }
      }
    },
    country: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isShortEnough(string){
          if(string.length > 60){
            throw new Error("Country must be less than 60 characters")
          }
        }
      }
      
    },
    lat:{
      type:DataTypes.DECIMAL,
      validate:{
        latIsVal(val){
          if(typeof val != "number")throw new Error("Latitude is not valid")
        }
      }
    },
    lng:{
      type:DataTypes.DECIMAL,
      validate:{
        latIsVal(val){
          if(typeof val != "number")throw new Error("Longitude is not valid")
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Brewery',
  });
  return Brewery;
};