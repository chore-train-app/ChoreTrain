const { Task } = require('../models');

const taskdata = [
  {
    name: 'Mowing Lawn',
    description: 'I need someone to mow the lawn this week, as ill be out of town for the next month',
    startTime: 'April 21, 2022 07:00:00',
    endTime: 'April 21, 2022 08:00:00',
    taskCreator: 1,
    taskTaker: 2,
    zip_code: "92082",
    status: false,
  },
  {
    name: 'Mowing Lawn',
    description: 'I need someone to mow the lawn this week, as ill be out of town for the next month',
    startTime: 'April 21, 2022 07:00:00',
    endTime: 'April 21, 2022 08:00:00',
    taskCreator: 1,
    taskTaker: 2,
    zip_code: "92109",
    status: false,
  },
  {
    name: 'Dishwashing',
    description: 'I have broken my hand and need someone to assist in washing dishes.',
    startTime: 'April 7, 2022 09:00:00',
    endTime: 'April 7, 2022 010:00:00',
    taskCreator: 5,
    taskTaker: 3,
    zip_code: "92109",
    status: false,
  },
  {
    name: 'Transportation To Eye Doctor',
    description: 'I need to get my eyes checked and will be unable to see for a few hours. I am in need of a ride and assistance walking up my apartment stairs',
    startTime: 'April 9, 2022 11:00:00',
    endTime: 'April 9, 2022 13:00:00',
    taskCreator: 4,
    taskTaker: 5,
    zip_code: "92109",
    status: false,
  },
  {
    name: 'Light Bulb Changing',
    description: 'I would like for someone to come change my lightbulbs please, I have a ladder but am scared of heights.',
    startTime: 'April 1, 2022 11:00:00',
    endTime: 'April 1, 2022 12:00:00',
    taskCreator: 2,
    taskTaker: 3,
    zip_code: "92109",
    status: false,
  },
  {
    name: 'Household Cleaning',
    description: 'I am moving and need a deep cleaning in order to get my deposit back',
    startTime: 'April 29, 2022 09:00:00',
    endTime: 'April 29, 2022 15:00:00',
    taskCreator: 8,
    taskTaker: 6,
    zip_code: "92109",
    status: false,
  },
  {
    name: 'Gardening',
    description: 'I have broken my ankle and will not be able to water my beloved plants these next few weeks',
    startTime: 'April 2, 2022 08:00:00',
    endTime: 'April 2, 2022 9:00:00',
    taskCreator: 9,
    taskTaker: 10,
    zip_code: "92128",
    status: false,
  },
];

const seedTasks = () => Task.bulkCreate(taskdata);

module.exports = seedTasks;