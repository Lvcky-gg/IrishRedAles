'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Beer.belongsTo(models.Brewery, { foreignKey: "breweryId" });
      Beer.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Beer.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isGreaterThanFive(str) {
          if (str.length < 3) {
            throw new Error("Name must be longer than three characters.");
          }
        },
        isLessThanFifty(str) {
          if (str.length > 30) {
            throw new Error("Name can not be longer than Thirty characters.");
          }
        },
      },
      
      
    },
    price: {
      type:DataTypes.DECIMAL,
      allowNull:false,
      validate:{
        isCorrect(price){
          // if(price.length < 4)throw new Error("Input valid price.")
          if(price > 50)throw new Error("Price is too high")
          if((price.toString().split('.')[1].length > 2))throw new Error("Input valid price.")
        }
        
      }
    },
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    breweryId:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Beer',
  });
  return Beer;
};