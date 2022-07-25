import React from 'react';
import PropTypes from 'prop-types';

export default function CardProductsDetails({
  i,
  productName,
  quantityProduct,
  price,
}) {
  return (
    <div>
      <div style={ { display: 'flex' } }>
        <p>
          Item
        </p>
        <p>
          Descrição
        </p>
        <p>
          Quantidade
        </p>
        <p>
          Valor Unitário
        </p>
        <p>
          Sub-total
        </p>
      </div>

      <div style={ { display: 'flex' } }>
        <h4
          data-testid={ `customer_order_details__element-order-table-item-number-${i}` }
        >
          { i + 1}
        </h4>
        <h4 data-testid={ `customer_order_details__element-order-table-name-${i}` }>
          { productName }
        </h4>
        <h4 data-testid={ `customer_order_details__element-order-table-quantity-${i}` }>
          { quantityProduct.quantity }
        </h4>
        <h4 data-testid={ `customer_order_details__element-order-total-price-${i}` }>
          { price.toFixed(2).toString().replace('.', ',') }
        </h4>
        <h4 data-testid={ `customer_order_details__element-order-table-sub-total-${i}` }>
          { (quantityProduct.quantity * price).toFixed(2).toString().replace('.', ',') }
        </h4>
      </div>
    </div>
  );
}

CardProductsDetails.propTypes = {
  price: PropTypes.number.isRequired,
  quantityProduct: PropTypes.objectOf(Object).isRequired,
  productName: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  // click: PropTypes.func.isRequired,
  // id: PropTypes.number.isRequired,
};
