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
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: true,
      references: {
        model: 'user',
        key: ('id', 'username'),
      },
    },
    taskTaker: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: true,
      references: {
        model: 'user',
        key: ('id', 'username'),
      },
    },
    zip_code: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      nest: true,
      raw: true,
    }
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