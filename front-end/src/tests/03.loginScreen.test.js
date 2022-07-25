import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('03 - Verifica se a página de login é renderizada corretamente', () => {
  it('11. A raiz da aplicação, em `<App />`, renderiza com sucesso', () => {
    renderWithRouter(
      <App />,
    );
  });

  it('12. A tela contêm o input de email e password', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('common_login__input-email')).toBeDefined();
    expect(screen.getByTestId('common_login__input-password')).toBeDefined();
  });

  it('13. A tela contêm os botões de login e', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('common_login__button-login')).toBeDefined();
    expect(screen.getByTestId('common_login__button-register')).toBeDefined();
  });
});
