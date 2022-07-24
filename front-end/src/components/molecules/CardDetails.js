import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

export default function CardDetails({
  // Date,
  // nOrder,
  i,
  productName,
  quantity,
  price,
  subtotal,
  orderNumber,
  sellerName,
  orderDate,
  deliveryStatus,
  // click,
  // id,
}) {
  // ALTERAR DATA TESTID
  const dataStats = 'customer_order_details__element-order-details-label-delivery-status';
  return (
    <div>

      <div style={ { display: 'flex' } }>
        <h2 data-testid="customer_order_details__element-order-table-item-number">
          { orderNumber }
        </h2>
        <h2 data-testid="customer_order_details__element-order-details-label-seller-name">
          P. Vend:
          {' '}
          { sellerName }
        </h2>
        <h2 data-testid="customer_order_details__element-order-details-label-order-date">
          { orderDate }
        </h2>
        <h2 data-testid={ dataStats }>
          { deliveryStatus }
        </h2>
        <Button
          nameView="MARCAR COMO ENTREGUE"
          disabled={ false }
          testid="customer_order_details__button-delivery-check"
          // onClick={ () => click(id) }
          name="btnEntregue"
        />
      </div>

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
          { i }
        </h4>
        <h4 data-testid={ `customer_order_details__element-order-table-name-${i}` }>
          { productName }
        </h4>
        <h4 data-testid={ `customer_order_details__element-order-table-quantity-${i}` }>
          { quantity }
        </h4>
        <h4 data-testid={ `customer_order_details__element-order-total-price-${i}` }>
          { price }
        </h4>
        <h4 data-testid={ `customer_order_details__element-order-table-sub-total-${i}` }>
          { subtotal }
        </h4>
      </div>
    </div>
  );
}

CardDetails.propTypes = {
  orderNumber: PropTypes.string.isRequired,
  sellerName: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  deliveryStatus: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  subtotal: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  // click: PropTypes.func.isRequired,
  // id: PropTypes.number.isRequired,
};
