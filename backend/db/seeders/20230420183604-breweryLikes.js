"use strict";
let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "BreweryLikes";
    await queryInterface.bulkInsert(
      options,
      [
        {
          userId: 1,
          breweryId: 1,
        },
        {
          userId: 2,
          breweryId: 2,
        },
        {
          userId: 1,
          breweryId: 1,
        },
        {
          userId: 1,
          breweryId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "BreweryLikes";
    const Op = Sequelize.Op;

    await queryInterface.bulkDelete(options, {
      breweryId: { [Op.in]: [1, 2, 3] },
    });
  },
};
