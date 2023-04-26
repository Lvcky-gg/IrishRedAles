'use strict';
/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName='Breweries'
    await queryInterface.createTable(options, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      breweryName: {
        allowNull:false,
        type: Sequelize.STRING,
        unique:true
      },
      addressLineOne:{
        allowNull:false,
        type: Sequelize.STRING
      },
      city:{
        type: Sequelize.STRING,
        allowNull:false
      },
      description: {
        type: Sequelize.STRING
      },
      zip: {
        allowNull:false,
        type: Sequelize.STRING
      },
      state: {
        allowNull:false,
        type: Sequelize.STRING
      },
      country: {
        allowNull:false,
        type: Sequelize.STRING
      },
      lat: {
        allowNull:false,
        type: Sequelize.DECIMAL
      },
      lng: {
        allowNull:false,
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    options.tableName='Breweries'
    await queryInterface.dropTable(options);
  }
};