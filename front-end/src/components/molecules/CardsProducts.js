import React from 'react';
import PropTypes from 'prop-types';
import ItemsCounter from '../atoms/ItemsCounter';

// Remover R$ da linha 15 caso o teste falhe
export default function CardsProducts({
  imgSrc,
  productName,
  precoProduto,
  id,
}) {
  return (
    <div data-testid="product">
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        R$
        { precoProduto.toString().replace(/\./, ',') }
      </p>
      <img
        style={ { width: '100px' } }
        alt={ productName }
        src={ imgSrc }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ productName}</p>
      <ItemsCounter id={ id } />
    </div>
  );
}

CardsProducts.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  precoProduto: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
