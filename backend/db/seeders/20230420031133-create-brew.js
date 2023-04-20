'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Breweries"
     await queryInterface.bulkInsert(options, [
      {
        "name":"Earth Rider",
        "description":"Wisconsin's Best",
        "addressLineOne":"1715 N 3rd St #1617",
        "city":"Superior",
        "zip":"54880",
        "state":"Wisconsin",
        "country":"United States"
  },
  {
    "name":"Bent Paddle",
    "description":"From day one the founders have made the best beer",
    "addressLineOne":"1832 W Michigan St",
    "city":"Duluth",
    "zip":"55806",
    "state":"Minnestota",
    "country":"United States"
},
{
  "name":"Castle Danger",
  "description":"Great Beer",
  "addressLineOne":"17 7th St",
  "city":"Two Harbors",
  "zip":"55616",
  "state":"Minnestota",
  "country":"United States"
}
       
      ], {});
   
  },

  async down (queryInterface, Sequelize) {
    options.tableName = "Breweries"
    const Op = Sequelize.Op;

     await queryInterface.bulkDelete(options, {
      name:{[Op.in]:["Earth Rider","Bent Paddle","Castle Danger"]}
     });
     
  }
};
