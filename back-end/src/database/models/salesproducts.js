import { Model } from 'sequelize';
import db from '.';
import Product from './products';
import Sale from './sales';

export default class SaleProduct extends Model { }

SaleProduct.init({
  saleId: DataTypes.INTEGER,
  productId: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER
}, {
  sequelize: db,
  modelName: 'SaleProduct',
  tableName: 'salesproducts',
  underscored: true
});

Product.hasMany(SaleProduct, { foreignKey: 'productId' });
Sale.hasMany(SaleProduct, { foreignKey: 'saleId' });

SaleProduct.belongsTo(Product, { foreignKey: 'productId' });
SaleProduct.belongsTo(Sale, { foreignKey: 'saleId' });