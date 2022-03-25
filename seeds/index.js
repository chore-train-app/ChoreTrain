const sequelize = require('../config/connection');
const { User } = require('../models');
const seedTasks = require('./taskData');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedTasks();

  process.exit(0);
};

seedDatabase();