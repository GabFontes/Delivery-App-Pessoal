import React from 'react';
import CardOrders from '../components/molecules/CardOrders';
import Header from '../components/molecules/Header';
import Context from '../context/Context';

export default function Orders() {
  const {
    setOrders,
    ordersData,
  } = React.useContext(Context);

  React.useEffect(() => {
    setOrders(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
