'use strict';

/** @type {import('sequelize-cli').Migration} */
let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Beers";
    await queryInterface.bulkInsert(
      options,[

        {
          breweryId:1,
          name:"Sample Beer One",
          price:6.45
        },
        {
          breweryId:1,
          name:"Sample Beer Two",
          price:6.25
        },
        {
          breweryId:1,
          name:"Sample Beer Three",
          price:6.75
        },

      ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = "Beers";

    const Op = Sequelize.Op;

    await queryInterface.bulkDelete(options, {
      breweryId: { [Op.in]: [1, 2, 3] },
    });
    
  }
};
