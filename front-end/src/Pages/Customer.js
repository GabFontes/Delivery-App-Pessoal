import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CardsProducts from '../components/molecules/CardsProducts';
import TotalCartButton from '../components/atoms/TotalCartButton';
import Header from '../components/molecules/Header';
// import GetProduct from '../services/GetProduct';
import Context from '../context/Context';

export default function Customer() {
  const {
    // userData,
    // login,
    totalPrice,
    productsData,
  } = useContext(Context);

  const history = useHistory();

  const handleBtnCar = async () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      <Header />

      { productsData.map(({ name, price, urlImage, id }, i) => (
        <CardsProducts
          key={ i }
          id={ id }
          imgSrc={ urlImage }
          productName={ name }
          precoProduto={ price }
        />
      ))}
      <TotalCartButton totalPrice={ totalPrice } handleBtnCar={ handleBtnCar } />
      {/* <h3> Total </h3>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleBtnCar }
      >
        <h2 data-testid="customer_products__checkout-bottom-value">
          Ver Carrinho:
          { totalPrice.toFixed(2).toString().replace('.', ',') }
        </h2>
      </button> */}
    </div>
  );
}
