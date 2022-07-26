import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

export default function CardOrderDetails({
  orderNumber, // id
  sellerName,
  orderDate,
  deliveryStatus,
}) {
  const dataStats = 'customer_order_details__element-order-details-label-delivery-status';

  return (
    <div>
      Detalhes do Pedido
      <div style={ { display: 'flex' } }>
        <h2 data-testid="customer_order_details__element-order-details-label-order-id">
          PEDIDO
          {' '}
          { orderNumber }
        </h2>
        <h2 data-testid="customer_order_details__element-order-details-label-seller-name">
          P. Vend:
          {' '}
          { sellerName.name }
        </h2>
        <h2 data-testid="customer_order_details__element-order-details-label-order-date">
          { new Date(orderDate).toLocaleDateString('pt-BR') }
        </h2>
        <h2 data-testid={ dataStats }>
          { deliveryStatus }
        </h2>
        <Button
          nameView="MARCAR COMO ENTREGUE"
          disabled
          testid="customer_order_details__button-delivery-check"
          onClick={ () => console.log('👷  em manutenção') }
          name="btnEntregue"
        />
      </div>
    </div>
  );
}

CardOrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  sellerName: PropTypes.objectOf(Object).isRequired,
  orderDate: PropTypes.string.isRequired,
  deliveryStatus: PropTypes.string.isRequired,
  // click: PropTypes.func.isRequired,
  // id: PropTypes.number.isRequired,
};
