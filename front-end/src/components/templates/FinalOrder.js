import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import ProductCart from '../molecules/CartProduct';
import { readProducts, setProduct } from '../../services/AddProducts';

export default function FinalOrder() {
  const {
    totalPrice,
  } = useContext(Context);

  const [cartItens, setCartItens] = useState(readProducts());
  const [finalPrice, setFinalPrice] = useState(totalPrice);

  const handleClick = (paramId) => {
    const results = readProducts();
    const newResults = results.filter((prod) => prod.id !== paramId);
    const total = newResults.reduce((acc, act) => (Number(act.subTotal) + acc), 0);
    setProduct(newResults);
    setCartItens(newResults);
    setFinalPrice(total);
  };

  return (
    <div>
      <div>
        { cartItens && cartItens.map(({
          name,
          quantity,
          unityPrice,
          subTotal,
          id,
        }, i) => (
          <ProductCart
            key={ i }
            indice={ i }
            id={ id }
            productName={ name }
            quantity={ quantity }
            price={ unityPrice }
            subtotal={ subTotal }
            set={ setCartItens }
            click={ handleClick }
          />
        ))}
      </div>
      <div data-testid="customer_checkout__element-order-total-price">
        Total: R$
        {' '}
        { finalPrice.toFixed(2).toString().replace('.', ',') }
      </div>
    </div>
  );
}
