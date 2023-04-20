'use strict';

/** @type {import('sequelize-cli').Migration} */
let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Reviews"

      await queryInterface.bulkInsert(options, [
        {
          "ownerId":1,
          "breweryId":1,
          "rating":4,
          "description": "this place is great"
        },
        {
          "ownerId":1,
          "breweryId":1,
          "rating":2,
          "description": "this place is great"
        },
        {
          "ownerId":1,
          "breweryId":1,
          "rating":3,
          "description": "this place is great"
        }
        
     ], {});
   
  },

  async down (queryInterface, Sequelize) {
      options.tableName = "Breweries"
      const Op = Sequelize.Op;

      await queryInterface.bulkDelete(options, {
       ownerId:{[Op.in]:[1]}
      });
     
  }
};
