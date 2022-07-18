'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        user_id: 3,
        seller_id: 2,
        total_price: 15.00,
        delivery_address: 'Rua dos BoBos, Nº0',
        delivery_number: '000',
        sale_date: new Date(),
        status: 'pendente',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};




