const bcryptjs = require('bcryptjs');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('users',
      [
        {
          name: 'John Doe',
          email: 'john@john.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'John Doe 2',
          email: 'john2@john2.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'John Doe 3',
          email: 'john3@john3.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {});
  },

  down: async () => {},
};
