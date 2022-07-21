import React from 'react';
import PropTypes from 'prop-types';
import { readProducts } from '../../services/AddProducts';

export default function TotalCartButton({ totalPrice, handleBtnCar }) {
  const isDisabeled = readProducts().length < 1;
  return (
    <div>
      <h3> Total </h3>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleBtnCar }
        disabled={ isDisabeled }
      >
        <h2 data-testid="customer_products__checkout-bottom-value">
          Ver Carrinho:
          { totalPrice.toFixed(2).toString().replace('.', ',') }
        </h2>
      </button>
    </div>
  );
}

TotalCartButton.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  handleBtnCar: PropTypes.func.isRequired,
};
