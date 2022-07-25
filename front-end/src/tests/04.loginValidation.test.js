import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const btnLogin = 'common_login__button-login';
const inputEmail = 'common_login__input-email';
const inputPassword = 'common_login__input-password';

describe('04 - Verifica a validações dos inputs', () => {
  it('14. O botão do login deve estar desabilitado se o email não for correto', () => {
    renderWithRouter(<App />);
    const buttonLogin = screen.getByTestId(btnLogin);

    userEvent.type(
      screen.getByTestId(inputEmail),
      'victor',
    );

    expect(buttonLogin).toBeDisabled();
  });

  it('15. botão de login desabilitado, com o email correto, porém a senha errada', () => {
    renderWithRouter(<App />);
    const buttonLogin = screen.getByTestId(btnLogin);

    userEvent.type(
      screen.getByTestId(inputEmail),
      'victor.kamiguchi@gmail.com',
    );

    userEvent.type(
      screen.getByTestId(inputPassword),
      '123',
    );

    expect(buttonLogin).toBeDisabled();
  });

  it('16. botão de login habilitado, com o email e senhas corretos', () => {
    renderWithRouter(<App />);
    const buttonLogin = screen.getByTestId(btnLogin);

    userEvent.type(
      screen.getByTestId(inputEmail),
      'victor.kamiguchi@gmail.com',
    );

    userEvent.type(
      screen.getByTestId(inputPassword),
      '123456',
    );

    expect(buttonLogin).not.toBeDisabled();
  });
});
