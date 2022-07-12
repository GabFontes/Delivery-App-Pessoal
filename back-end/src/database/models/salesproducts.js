const { Model } = require('sequelize');
const db = require('.');
const Product = require('./products');
const Sale = require('./sales');

module.exports = class SaleProduct extends Model { }

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