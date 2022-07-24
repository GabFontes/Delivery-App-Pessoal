// import { createAdminResponse, getAllResponse} from './Admin/AdminMock';
import productsResponse from './Products/ProductsMock';
import sellerGetAllResponse from './Seller/SellerMock';
import longinResponse from './Login/LoginMock';
import registerResponse from './Register/UserMock';
import { CreateSaleResponse } from './Sales/SalesMock';

// url's
// GET http://localhost:3001/products
// GET http://localhost:3001/seller
// POST http://localhost:3001/login
// POST http://localhost:3001/register
// POST http://localhost:3001/sales

export const getMockAxios = (url) => {
  if (url === 'http://localhost:3001/products') {
    return Promise.resolve(productsResponse);
  }

  if (url === 'http://localhost:3001/seller') {
    return Promise.resolve(sellerGetAllResponse);
  }

  return Promise.reject(new Error('endpoint error'));
};

export const postMockAxios = (url) => {
  if (url === 'http://localhost:3001/login') {
    return Promise.resolve(longinResponse);
  }
  if (url === 'http://localhost:3001/register') {
    return Promise.resolve(registerResponse);
  }
  if (url === 'http://localhost:3001/sales') {
    return Promise.resolve(CreateSaleResponse);
  }
  return Promise.reject(new Error('endpoint error'));
};
