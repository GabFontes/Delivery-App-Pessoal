import { useState, useEffect } from 'react';
import { readProducts } from '../services/AddProducts';

export default function useUpdatePriceApi(prod) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const calculeTotalPrice = () => {
      const products = readProducts();
      const total = products
        .reduce((acc, act) => ((act.quantity * Number(act.price)) + acc), 0);
      setTotalPrice(total);
    };
    if (prod > 0) {
      calculeTotalPrice();
    }
  }, [prod]);
  return [totalPrice];
}
