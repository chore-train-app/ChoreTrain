const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Train extends Model {}

Train.init(
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
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    trainCreator: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: true,
      references: {
        model: 'user',
        key: 'username',
      },
    },
    guestList: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: true,
      references: {
        model: 'user',
        key: 'username',
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'train',
  }
);

module.exports = Train;