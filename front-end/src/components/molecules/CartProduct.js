import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import { readProducts, setProduct } from '../../services/AddProducts';

// Remover R$ da linha 15 caso o teste falhe
export default function ProductCart({
  productName,
  quantity,
  price,
  subtotal,
  indice,
}) {
  const handleClick = (index) => {
    const products = readProducts();
    const updatedProducts = products.splice(index, 1);
    setProduct(updatedProducts);
  };

  return (
    <div style={ { display: 'flex' } }>
      <p>
        { indice }
      </p>
      <h4 data-testid={ `customer_checkout__element-order-table-name-${indice}` }>
        { productName }
      </h4>
      <h4 data-testid={ `customer_checkout__element-order-table-quantity-${indice}` }>
        { quantity }
      </h4>
      <h4 data-testid={ `customer_checkout__element-order-table-unit-price-${indice}` }>
        { price }
      </h4>
      <h4 data-testid={ `customer_checkout__element-order-table-unit-price-${indice}` }>
        { subtotal }
      </h4>
      <Button
        nameView="Remover"
        disabled={ false }
        testid={ `customer_checkout__element-order-table-remove-${indice}` }
        onClick={ () => handleClick(indice) }
        name="removeButton"
      />
    </div>
  );
}

ProductCart.propTypes = {
  price: PropTypes.string.isRequired,
  subtotal: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  indice: PropTypes.number.isRequired,
};
