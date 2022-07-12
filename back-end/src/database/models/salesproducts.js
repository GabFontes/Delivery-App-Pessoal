module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    tableName: 'salesProducts',
    underscored: true
  });
  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'productId',
      as: 'products',
      through: SaleProduct,
      otherKey: 'saleId'
    });
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'saleId',
      as: 'sale',
      through: SaleProduct,
      otherKey: 'productId'
    });
  };
  return SaleProduct;
};
