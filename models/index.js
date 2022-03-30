const Task = require("./Task");
const User = require("./User");
const Comment = require('./Comment');

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

Task.hasMany(Comment, {
  foreignKey: "task",
})
User.hasMany(Comment, {
  foreignKey: "user",
})

module.exports = { User, Task, Comment };
