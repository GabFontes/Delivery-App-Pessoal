import { Model } from 'sequelize';
import db from '.';

export default class SalesProducts extends Model { }

SalesProducts.init({
  saleId: DataTypes.INTEGER,
  productId: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER
}, {
  sequelize: db,
  modelName: 'SalesProducts',
  underscored: true
});
