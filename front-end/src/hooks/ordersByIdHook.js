import { useState, useEffect } from 'react';
import GetOrdersById from '../services/GetOrderById';

export default function useOrdersByIdApi(orderId, isOrdersById, userData) {
  const [orderById, setOrderById] = useState([]);

  useEffect(() => {
    const saveOrderApi = async (userData2) => {
      try {
        const { token } = userData2;
        const responseOrders = await GetOrdersById(orderId, token);
        setOrderById(new Array(responseOrders));
      } catch (e) {
        console.log(e);
      }
    };
    if (isOrdersById) {
      saveOrderApi(userData);
    }
  }, [orderId, userData, isOrdersById]);
  return [orderById];
}
