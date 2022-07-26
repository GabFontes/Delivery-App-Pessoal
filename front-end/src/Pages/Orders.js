import React, { useEffect, useContext } from 'react';
import CardOrders from '../components/molecules/CardOrders';
import Header from '../components/molecules/Header';
import Context from '../context/Context';

export default function Orders() {
  const {
    setOrders,
    ordersData,
  } = useContext(Context);

  useEffect(() => {
    setOrders(true);
  }, [setOrders]);

  return (
    <div>
      <Header />

      { ordersData.map(({ id, status, saleDate, totalPrice }, i) => (
        <CardOrders
          key={ i }
          idPedido={ id }
          status={ status }
          data={ saleDate }
          price={ +totalPrice }
        />
      ))}
    </div>
  );
}
