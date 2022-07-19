import React, { useContext } from 'react';
import CardsProducts from '../components/molecules/CardsProducts';
import Header from '../components/molecules/Header';
// import GetProduct from '../services/GetProduct';
import Context from '../context/Context';

export default function Customer() {
  const {
    // userData,
    // login,
    productsData,
  } = useContext(Context);

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
      <h1>Customer</h1>
    </div>
  );
}
