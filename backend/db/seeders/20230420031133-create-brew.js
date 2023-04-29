"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Breweries";
    await queryInterface.bulkInsert(
      options,
      [
        {
          breweryName: "Earth Rider",
          ownerId: 1,
          description: "Wisconsin's Best",
          addressLineOne: "1715 N 3rd St #1617",
          city: "Superior",
          zip: "54880",
          state: "Wisconsin",
          country: "United States",
          lat: 46.73596303437364,
          lng: -92.10335126135686,
        },
        {
          breweryName: "Bent Paddle",
          ownerId: 2,
          description: "From day one the founders have made the best beer",
          addressLineOne: "1832 W Michigan St",
          city: "Duluth",
          zip: "55806",
          state: "Minnesota",
          country: "United States",
          lat: 46.768546458038166,
          lng: -92.12066727409862,
        },
        {
          breweryName: "Castle Danger",
          ownerId: 3,
          description: "Great Beer",
          addressLineOne: "17 7th St",
          city: "Two Harbors",
          zip: "55616",
          state: "Minnesota",
          country: "United States",
          lat: 47.01970375833848,
          lng: -91.67339801641828,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Breweries";
    const Op = Sequelize.Op;

    await queryInterface.bulkDelete(options, {
      breweryName: { [Op.in]: ["Earth Rider", "Bent Paddle", "Castle Danger"] },
    });
  },
};
