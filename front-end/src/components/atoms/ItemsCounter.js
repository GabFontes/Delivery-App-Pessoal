import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import Context from '../../context/Context';
import { addProduct, reduceProduct, inputProduct } from '../../services/GetProducts';

export default function ItemsCounter({ id }) {
  const { productsData, setProdCart, prodCart } = useContext(Context);
  const [num, setNum] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);

  // Constantes com o máximo e o mínimo de itens no estado
  const maxItems = 30;
  const minItems = 0;

  // Função filter id product unique
  const filterProducts = () => productsData.filter((prod) => prod.id === id);

  // Função que incrementa o número
  const incrementNum = () => {
    if (num < maxItems) setNum(Number(num) + 1);
    const { id: prodId, name, price } = filterProducts()[0];
    addProduct(prodId, name, price, num + 1);
    setProdCart(prodCart + 1);
    setBtnDisabled(false);
  };

  // Função que decrementa o número
  const decrementNum = ({ target: { value } }) => {
    if (num > minItems) {
      setNum(num - 1);
      reduceProduct(id);
      setProdCart(prodCart + 1);
    }
    if (+value === 1) {
      setBtnDisabled(true);
    }
    if (+value > 1) setBtnDisabled(false);
  };

  // Função que altera o valor do estado com base no input
  const handleChange = ({ target: { value } }) => {
    const { id: prodId, name, price } = filterProducts()[0];
    if (+value < 0) {
      inputProduct(prodId, name, price, 0);
      setProdCart(prodCart + 1);
      setBtnDisabled(true);
      return setNum(0);
    }
    setNum(value);
    inputProduct(prodId, name, price, +value);
    setProdCart(prodCart + 1);
    if (+value === 0) setBtnDisabled(true);
    if (+value > 0) setBtnDisabled(false);
  };

  return (
    <div>
      <button
        type="button"
        value={ num }
        onClick={ decrementNum }
        data-testid={ `customer_products__button-card-add-item-${id}` }
        disabled={ btnDisabled }
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
        value={ num }
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
