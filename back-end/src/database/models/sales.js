import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Sales extends Model { }

Sales.init({
  userId: DataTypes.INTEGER,
  sellerId: DataTypes.INTEGER,
  totalPrice: DataTypes.DECIMAL,
  deliveryAddress: DataTypes.STRING,
  deliveryNumber: DataTypes.STRING,
  saleDate: DataTypes.DATE,
  status: DataTypes.STRING
}, {
  sequelize: db,
  modelName: 'sales',
  tableName: 'sales',
  underscored: true,
  timestamps: false
});
