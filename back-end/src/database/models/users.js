const { Model, DataTypes } = require('sequelize');
const db = require('.');

module.exports = class User extends Model { }

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING
}, {
  sequelize: db.sequelize,
  tableName: 'users',
  modelName: 'User',
  timestamps: false,
});


