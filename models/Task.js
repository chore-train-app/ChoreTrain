const { Model, DataTypes, DATE} = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull:false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    taskCreator: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: true,
      references: {
        model: 'user',
        key: 'username',
      },
    },
    taskTaker: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: true,
      references: {
        model: 'user',
        key: 'username',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'task',
  }
);

module.exports = Task;