import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/molecules/Header';
import CardOrderDetails from '../components/molecules/CardOrderDetails';
import CardProductsDetails from '../components/molecules/CardProductsDetails';
import Context from '../context/Context';

export default function OrdersDetails() {
  const { setOrderById, setPId, ordersByIdData } = React.useContext(Context);

  const { id } = useParams();

  useEffect(() => {
    setOrderById(true);
    setPId(id);
  }, [id, setOrderById, setPId]);

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

      <div>
        <h2
          data-testid="customer_order_details__element-order-total-price"
        >
          { ordersByIdData.length > 0 && ordersByIdData[0].totalPrice.replace(/\./, ',')}
        </h2>

      </div>

    </div>
  );
}
