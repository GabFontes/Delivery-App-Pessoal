import React from 'react';
import axios from 'axios';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { postMockAxios, getMockAxios } from './mocks/mocksFetchs';
import renderWithRouter from './renderWithRouter';
import productsResponse from './mocks/Products/ProductsMock';
import App from '../App';

const btnLogin = 'common_login__button-login';
const inputEmail = 'common_login__input-email';
const inputPassword = 'common_login__input-password';
const testidUserName = 'customer_products__element-navbar-user-full-name';

jest.mock('axios');
describe('05 - Verifica se é possível fazer o login', () => {
  it('17. É possível fazer o login com os dados inseridos', async () => {
    axios.post.mockImplementation(postMockAxios);
    axios.get.mockImplementation(getMockAxios);

    renderWithRouter(<App />);
    const buttonLogin = screen.getByTestId(btnLogin);

    userEvent.type(
      screen.getByTestId(inputEmail),
      'thauler98@email.com',
    );

    userEvent.type(
      screen.getByTestId(inputPassword),
      'testando',
    );

    expect(buttonLogin).not.toBeDisabled();
    userEvent.click(buttonLogin);
    await waitFor(() => expect(axios.post).toHaveBeenCalled());
    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    expect(screen.getByTestId(testidUserName)).toHaveTextContent('Thauler Mayrink');
  });

  it('18. Verifica se os produtos são renderizados', async () => {
    axios.post.mockImplementation(postMockAxios);
    axios.get.mockImplementation(getMockAxios);

    renderWithRouter(<App />);
    const buttonLogin = screen.getByTestId(btnLogin);

    userEvent.type(
      screen.getByTestId(inputEmail),
      'thauler98@email.com',
    );

    userEvent.type(
      screen.getByTestId(inputPassword),
      'testando',
    );

    expect(buttonLogin).not.toBeDisabled();
    userEvent.click(buttonLogin);
    await waitFor(() => expect(axios.post).toHaveBeenCalled());
    await waitFor(() => expect(axios.get).toHaveBeenCalled());

    expect(screen.getAllByTestId('product').length).toEqual(productsResponse.length);
  });

  it('19. Login sem usuário no banco de dados', async () => {
    axios.post.mockImplementation(postMockAxios('notfound'));
    axios.get.mockImplementation(getMockAxios);

    renderWithRouter(<App />);
    const buttonLogin = screen.getByTestId(btnLogin);

    userEvent.type(
      screen.getByTestId(inputEmail),
      'olivaaa98@email.com',
    );

    userEvent.type(
      screen.getByTestId(inputPassword),
      'testando',
    );

    expect(buttonLogin).not.toBeDisabled();
    userEvent.click(buttonLogin);
    await waitFor(() => expect(axios.post).toHaveBeenCalled());

    expect(screen.getAllByTestId('common_login__element-invalid-email')).toBeDefined();
  });
});
