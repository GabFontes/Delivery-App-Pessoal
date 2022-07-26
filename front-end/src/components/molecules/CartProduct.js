import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

export default function ProductCart({
  productName,
  quantity,
  price,
  subtotal,
  i,
  click,
  id,
}) {
  return (
    <div>
      <div style={ { display: 'flex' } }>
        <h4 data-testid={ `customer_checkout__element-order-table-item-number-${i}` }>
          { i + 1 }
        </h4>
        <h4 data-testid={ `customer_checkout__element-order-table-name-${i}` }>
          { productName }
        </h4>
        <h4 data-testid={ `customer_checkout__element-order-table-quantity-${i}` }>
          { quantity }
        </h4>
        <h4 data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }>
          { price.toFixed(2).toString().replace('.', ',') }
        </h4>
        <h4 data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }>
          { subtotal.toFixed(2).toString().replace('.', ',') }
        </h4>
        <Button
          nameView="Remover"
          disabled={ false }
          testid={ `customer_checkout__element-order-table-remove-${i}` }
          onClick={ () => click(id) }
          name="removeButton"
        />
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  price: PropTypes.string.isRequired,
  subtotal: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
