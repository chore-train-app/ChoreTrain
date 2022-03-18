const User = require("./User");

User.hasMany(Task, {
  foreignKey: "",
  onDelete: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "",
});

module.exports = { User, Task };
