import React from 'react';
import PropTypes from 'prop-types';
import ItemsCounter from '../atoms/ItemsCounter';

export default function CardsProducts({
  imgSrc,
  productName,
  precoProduto,
  id,
}) {
  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { precoProduto.toString().replace(/\./, ',') }
      </p>
      <img
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
