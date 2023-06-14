'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Thales Admin',
      phoneNum: 'senha super secreta',
      role: 'admin',
    },
    {
      name: 'Thales User',
      phoneNum: '51982782428',
      role: 'user',
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
