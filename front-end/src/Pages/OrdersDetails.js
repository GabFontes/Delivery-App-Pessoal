import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/molecules/Header';
import CardOrderDetails from '../components/molecules/CardOrderDetails';
import CardProductsDetails from '../components/molecules/CardProductsDetails';
import Context from '../context/Context';

export default function OrdersDetails() {
  const { setOrderById, setPId, ordersByIdData } = React.useContext(Context);

  const { id } = useParams();

  React.useEffect(() => {
    setOrderById(true);
    setPId(id);
  }, [id, setOrderById, setPId]);

  // const productsData = ordersByIdData.map(({ products }) => (products));

  // console.log('productsData ->', productsData);
  // console.log('ordersByIdData ->', ordersByIdData);

  return (
    <div>
      <Header />

      { ordersByIdData.length > 0 && ordersByIdData.map(({
        id: nId,
        saleDate,
        status,
        seller,
      }, i) => (
        <CardOrderDetails
          key={ i }
          orderNumber={ nId }
          sellerName={ seller }
          orderDate={ saleDate }
          deliveryStatus={ status }
        />
      ))}

      { ordersByIdData.length > 0 && ordersByIdData[0].products.map(({
        name,
        price,
        SaleProduct,
      }, i) => (
        <CardProductsDetails
          key={ i }
          i={ i }
          productName={ name }
          quantityProduct={ SaleProduct }
          price={ +price }
        />
      ))}
    </div>
  );
}
