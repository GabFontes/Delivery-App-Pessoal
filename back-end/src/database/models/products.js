const { Model, DataTypes } = require('sequelize');
// const { Sequelize } = require('.');
const db = require('.');

// const Model = Sequelize.Model
// const { Sequelize } = require('.');

// const sequelize = require('.');

class Product extends Model { }

Product.init({
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  urlImage: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'Product',
  tableName: 'products',
  underscored: true,
  timestamps: false,
});

module.exports = Product;