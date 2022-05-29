'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const date = new Date();
    await queryInterface.bulkInsert('chars', [
      {
        name: 'Hu Tao',
        element: 'Pyro',
        createdAt: date,
        updatedAt: date,
      },
      {
        name: 'Keqing',
        element: 'Electro',
        createdAt: date,
        updatedAt: date,
      },
      {
        name: 'Ganyu',
        element: 'Cryo',
        createdAt: date,
        updatedAt: date,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('chars', null, {});
  }
};
