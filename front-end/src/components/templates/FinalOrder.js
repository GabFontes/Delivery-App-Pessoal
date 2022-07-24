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
      <div>
        { cartItens && cartItens.map(({
          name,
          quantity,
          unityPrice,
          subTotal,
          id,
        }, index) => (
          <ProductCart
            key={ index }
            i={ index }
            id={ id }
            productName={ name }
            quantity={ +quantity }
            price={ +unityPrice }
            subtotal={ +subTotal }
            set={ setCartItens }
            click={ handleClick }
          />
        ))}
      </div>
      <div data-testid="customer_checkout__element-order-total-price">
        <h2>
          Total: R$
          {' '}
          { finalPrice.toFixed(2).toString().replace('.', ',') }
        </h2>
      </div>
    </div>
  );
}
