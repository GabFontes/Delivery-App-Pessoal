import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Products extends Model { }
Products.init({
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  urlImage: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'products',
  tableName: 'products',
  underscored: true,
  timestamps: false
});