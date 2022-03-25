const Task = require("./Task");
const User = require("./User");

User.hasMany(Task, {
  foreignKey: "taskCreator",
  onDelete: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "taskCreator",
});

User.hasMany(Task, {
  foreignKey: "taskTaker",
  onDelete: "CASCADE",
});


module.exports = { User, Task, };
