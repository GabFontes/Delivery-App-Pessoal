import { useState, useEffect } from 'react';
import GetSellers from '../services/GetSellers';

export default function useSellerApi(isLogged, userData) {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const saveSellerApi = async (userData2) => {
      try {
        const { token } = userData2;
        const responseSellers = await GetSellers(token);
        setSellers(responseSellers);
      } catch (e) {
        console.log(e);
      }
    };
    if (isLogged) {
      saveSellerApi(userData);
    }
  }, [userData, isLogged]);
  return [sellers];
}
