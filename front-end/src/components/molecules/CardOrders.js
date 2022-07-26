import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CardOrders({
  idPedido,
  status,
  data,
  price,
}) {
  return (
    <Link to={ `/customer/orders/${idPedido}` }>
      <div style={ { display: 'flex' } }>
        <h4
          data-testid={ `customer_orders__element-order-id-${idPedido}` }
        >
          Pedido
          { idPedido }
        </h4>
        <h4 data-testid={ `customer_orders__element-delivery-status-${idPedido}` }>
          { status }
        </h4>
        <h4 data-testid={ `customer_orders__element-order-date-${idPedido}` }>
          { new Date(data).toLocaleDateString('pt-BR') }
        </h4>
        <h4 data-testid={ `customer_orders__element-card-price-${idPedido}` }>
          { price.toFixed(2).toString().replace('.', ',') }
        </h4>
      </div>
    </Link>
  );
}

CardOrders.propTypes = {
  idPedido: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
