import { useState, useEffect } from 'react';
import GetOrders from '../services/GetOrders';

export default function useOrdersApi(isOrders, userData) {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const saveOrderApi = async (userData2) => {
      try {
        const { token } = userData2;
        const responseOrders = await GetOrders(token);
        setOrder(responseOrders);
      } catch (e) {
        console.log(e);
      }
    };
    if (isOrders) {
      saveOrderApi(userData);
    }
  }, [userData, isOrders]);
  return [order];
}
