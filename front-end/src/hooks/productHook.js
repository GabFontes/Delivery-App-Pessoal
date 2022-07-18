import { useState, useEffect } from 'react';
import GetProduct from '../services/GetProduct';

export default function useProductsApi(isLogged, token) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const saveItemsApi = async (token2) => {
      try {
        const responseProducts = await GetProduct(token2);
        setproducts(responseProducts);
      } catch (e) {
        console.log(e);
      }
    };
    if (isLogged) {
      saveItemsApi(token);
    }
  }, [token, isLogged]);
  return [products];
}
