import axios from 'axios';
import GetProduct from '../services/GetProduct';
import GetSellers from '../services/GetSellers';
import { getMockAxios } from './mocks/mocksFetchs';
import productsResponse from './mocks/Products/ProductsMock';
import sellerGetAllResponse from './mocks/Seller/SellerMock';


jest.mock("axios");
describe('Axios - Testa as requisições GET', () => {
  describe('Get/products -> axios GetProduct(token)', () => {
    it('01. Sucesso -> A função retorna o mock esperado com a url esperada', async () => {
      axios.get.mockImplementation(getMockAxios);
      const result = await GetProduct('sucessfulltoken');
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products', {
        "headers": {"authorization": "sucessfulltoken"}
      });
      expect(result).toEqual(productsResponse)
    });

    it('02. Falha -> retorna o erro', async () => {
      axios.get.mockRejectedValueOnce(new Error('invalid token'))
      try {
        await GetProduct('failedtoken');
      } catch(error) {
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products', {
          "headers": {"authorization": "failedtoken"}
        });
        expect(error.message).toBe('invalid token')
      }
    });
  });

  describe('Get/seller -> axios GetSellers(token)', () => {
    it('03. Sucesso -> A função retorna o mock esperado com a url esperada', async () => {
      axios.get.mockImplementation(getMockAxios);
      const result = await GetSellers('sucessfulltoken');
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/seller', {
        "headers": {"authorization": "sucessfulltoken"}
      });
      expect(result).toEqual(sellerGetAllResponse)
    });

    it('04. Falha -> retorna o erro', async () => {
      axios.get.mockRejectedValueOnce(new Error('invalid token'))
      try {
        await GetSellers('failedtoken');
      } catch(error) {
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/seller', {
          "headers": {"authorization": "failedtoken"}
        });
        expect(error.message).toBe('invalid token')
      }
    });
  });
});
