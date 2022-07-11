import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class User extends Model { }

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING
}, {
  sequelize: db,
  tableName: 'users',
  modelName: 'users',
  timestamps: false,
});


