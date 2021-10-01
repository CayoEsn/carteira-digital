'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movimentacao', {
      id_transacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      data: {
        type: Sequelize.DATE
      },
      login_origem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      login_destino: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor_transferido: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movimentacao');
  }
};