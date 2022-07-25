import axios from 'axios';
import { postMockAxios } from './mocks/mocksFetchs';
import PostLogin from '../services/PostLogin';
import PostRegister from '../services/PostRegister';
import PostSale from '../services/PostSale';
import { longinResponse, loginRequest } from './mocks/Login/LoginMock';
import registerResponse, { registerRequest } from './mocks/Register/UserMock';
import { CreateSaleRequest, CreateSaleResponse } from './mocks/Sales/SalesMock';

jest.mock('axios');
describe('02 - Axios - Testa as requisições POST', () => {
  describe('post/login -> axios PostLogin(user)', () => {
    it('05. Sucesso -> A função retorna o mock esperado com a url esperada', async () => {
      axios.post.mockImplementation(postMockAxios);
      const result = await PostLogin(loginRequest);
      expect(axios.post).toHaveBeenCalled();
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/login', { email: 'thauler98@email.com', password: 'testando' });
      expect(result).toEqual(longinResponse);
    });

    it('06. Falha -> retorna o erro', async () => {
      axios.post.mockRejectedValue(postMockAxios('aa'));
      const result = PostLogin('e');
      expect(axios.post).toHaveBeenCalled();
      await expect(result).rejects.toThrow();
    });
  });

  describe('post/Register -> axios PostRegister(register)', () => {
    it('07. Sucesso -> A função retorna o mock esperado com a url esperada', async () => {
      axios.post.mockImplementation(postMockAxios);
      const result = await PostRegister(registerRequest);
      expect(axios.post).toHaveBeenCalled();
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/register', { email: 'thauler98@email.com', name: 'Thauler Mayrink', password: 'testando' });
      expect(result).toEqual(registerResponse);
    });

    it('08. Falha -> retorna o erro', async () => {
      axios.post.mockRejectedValue(postMockAxios('aa'));
      const result = PostRegister('e');
      expect(axios.post).toHaveBeenCalled();
      await expect(result).rejects.toThrow();
    });
  });

  describe('post/Sale -> axios PostSale(sale, token)', () => {
    it('09. Sucesso -> A função retorna o mock esperado com a url esperada', async () => {
      axios.post.mockImplementation(postMockAxios);
      const result = await PostSale(CreateSaleRequest, 'token');
      expect(axios.post).toHaveBeenCalled();
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/sales', CreateSaleRequest, { headers: { authorization: 'token' } });
      expect(result).toEqual(CreateSaleResponse);
    });

    it('10. Falha -> retorna o erro', async () => {
      axios.post.mockRejectedValue(postMockAxios('aa'));
      const result = PostSale('e');
      expect(axios.post).toHaveBeenCalled();
      await expect(result).rejects.toThrow();
    });
  });
});
