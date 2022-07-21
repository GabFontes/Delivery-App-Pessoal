import React from 'react';
import PropTypes from 'prop-types';

export default function TotalCartButton({ totalPrice, handleBtnCar }) {
  return (
    <div>
      <h3> Total </h3>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleBtnCar }
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
