import { useState, useEffect } from 'react';
import GetProduct from '../services/GetProduct';
import { getUser } from '../services/setUserLocal';

export default function useProductsApi(isLogged) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const saveItemsApi = async () => {
      try {
        const userLocal = getUser();
        const { token } = userLocal;
        const responseProducts = await GetProduct(token);
        setproducts(responseProducts);
      } catch (e) {
        console.log(e);
      }
    };
    if (isLogged) {
      saveItemsApi();
    }
  }, [isLogged]);
  return [products];
}
