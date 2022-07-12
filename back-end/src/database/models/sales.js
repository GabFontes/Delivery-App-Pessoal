import { Model, DataTypes } from 'sequelize';
import db from '.';
import User from './users';

export default class Sale extends Model { }

Sale.init({
  userId: DataTypes.INTEGER,
  sellerId: DataTypes.INTEGER,
  totalPrice: DataTypes.DECIMAL,
  deliveryAddress: DataTypes.STRING,
  deliveryNumber: DataTypes.STRING,
  saleDate: DataTypes.DATE,
  status: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'Sale',
  tableName: 'sales',
  underscored: true,
  timestamps: false
});

User.hasMany(Sale, { foreignKey: 'userId' });
User.hasMany(Sale, { foreignKey: 'sellerId' });

Sale.belongsTo(User, { foreignKey: 'userId' });
Sale.belongsTo(User, { foreignKey: 'sellerId' });
