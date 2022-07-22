import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

export default function ProductCart({
  productName,
  quantity,
  price,
  subtotal,
  indice,
  click,
  id,
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
        <p>
          Remover Item
        </p>
      </div>

      <div style={ { display: 'flex' } }>
        <h4>
          { indice }
        </h4>
        <h4 data-testid={ `customer_checkout__element-order-table-name-${indice}` }>
          { productName }
        </h4>
        <h4 data-testid={ `customer_checkout__element-order-table-quantity-${indice}` }>
          { quantity }
        </h4>
        <h4 data-testid={ `customer_checkout__element-order-table-unit-price-${indice}` }>
          { price }
        </h4>
        <h4 data-testid={ `customer_checkout__element-order-table-sub-total-${indice}` }>
          { subtotal }
        </h4>
        <Button
          nameView="Remover"
          disabled={ false }
          testid={ `customer_checkout__element-order-table-remove-${indice}` }
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
  indice: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
