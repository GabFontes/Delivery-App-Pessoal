import { useState, useEffect } from 'react';
import GetProduct from '../services/GetProduct';
import { saveUser } from '../services/setUserLocal';

export default function useProductsApi(isLogged, userData) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const saveItemsApi = async (userData2) => {
      try {
        const { user, token } = userData2;
        const { name, email, role } = user;
        saveUser({ name, email, role, token });
        const responseProducts = await GetProduct(token);
        setproducts(responseProducts);
      } catch (e) {
        console.log(e);
      }
    };
    if (isLogged) {
      saveItemsApi(userData);
    }
  }, [userData, isLogged]);
  return [products];
}
