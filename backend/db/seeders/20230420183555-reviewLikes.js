'use strict';
let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "ReviewLikes"
 
     await queryInterface.bulkInsert(options, [{
      "userId":1,
      "reviewId":1
      },{
        "userId":2,
        "reviewId":2,
      }, 
      {
        "userId":1,
        "reviewId":2,
      },
      {
        "userId":1,
        "reviewId":3,
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    options.tableName = "ReviewLikes"
    const Op = Sequelize.Op;
 
     await queryInterface.bulkDelete(options, {
      reviewId:{[Op.in]:[1,2,3]}

     });

  }
};
