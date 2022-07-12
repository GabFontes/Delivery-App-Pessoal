import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
