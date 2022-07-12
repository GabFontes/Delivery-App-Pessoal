module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING
  }, {
    modelName: 'Product',
    tableName: 'products',
    underscored: true,
    timestamps: false,
  });
  return Product
};
