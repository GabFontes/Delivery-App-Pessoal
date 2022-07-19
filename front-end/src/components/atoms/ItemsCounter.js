import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function ItemsCounter({ id }) {
  const [num, setNum] = useState(0);

  // Constantes com o máximo e o mínimo de itens no estado
  const maxItems = 10;
  const minItems = 0;

  // Função que incrementa o número
  const incrementNum = () => {
    if (num < maxItems) setNum(Number(num) + 1);
  };

  // Função que decrementa o número
  const decrementNum = () => {
    if (num > minItems) setNum(num - 1);
  };

  // Função que altera o valor do estado com base no input
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div>
      <button
        type="button"
        onClick={ decrementNum }
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        -
      </button>
      <input
        type="text"
        value={ num }
        onChange={ handleChange }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        type="button"
        onClick={ incrementNum }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        +

      </button>
    </div>
  );
}

ItemsCounter.propTypes = {
  id: PropTypes.number.isRequired,
};
