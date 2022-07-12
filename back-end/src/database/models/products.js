import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Product extends Model { }
Product.init({
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  urlImage: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'Product',
  tableName: 'products',
  underscored: true,
  timestamps: false
});