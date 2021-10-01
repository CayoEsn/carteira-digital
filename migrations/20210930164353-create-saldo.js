'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Saldo', {
      login: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      saldo: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Saldo');
  }
};