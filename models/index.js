const Task = require("./Task");
const Train = require("./Train");
const User = require("./User");

User.hasMany(Train, {
  foreignKey: "trainCreator",
  onDelete: "CASCADE",
});

Train.belongsTo(User, {
  foreignKey: "trainCreator",
});

User.hasMany(Train, {
  foreignKey: "guestList",
  onDelete: "CASCADE",
});

Train.hasMany(User, {
  foreignKey: "trainCreator",
});

User.hasMany(Task, {
  foreignKey: "trainCreator",
  onDelete: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "taskCreator",
});

User.hasMany(Task, {
  foreignKey: "taskTaker",
  onDelete: "CASCADE",
});

Task.hasOne(User, {
  foreignKey: "taskTaker",
});

Task.belongsTo(Train, {
  foreignKey: 'train_name',
});

Train.hasMany(Task, {
  foreignKey: 'train_name',
  onDelete: 'CASCADE',
});

module.exports = { User, Task, Train };
