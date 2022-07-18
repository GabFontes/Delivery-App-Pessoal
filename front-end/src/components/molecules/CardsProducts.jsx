import React from 'react';
import PropTypes from 'prop-types';
// import ItemsCounter from '../atoms/ItemsCounter';

export default function CardsProducts({
  imgSrc,
  productName,
  precoProduto,
}) {
  return (
    <div>
      <p>
        { precoProduto }
      </p>
      <img alt={ productName } src={ imgSrc } />
      <p>{ productName }</p>
      {/* <ItemsCounter /> */}
    </div>
  );
}

CardsProducts.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  precoProduto: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
};
