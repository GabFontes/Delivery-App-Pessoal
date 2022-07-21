module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    tableName: 'salesProducts',
    underscored: true,
    timestamps: false,
  });
  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales',
      through: SaleProduct,
    });
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
      through: SaleProduct,
    });
  };
  return SaleProduct;
};
