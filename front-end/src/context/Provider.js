import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useProductsApi from '../hooks/productHook';
import useUpdatePriceApi from '../hooks/totalPriceHook';
import useSellerApi from '../hooks/sellerHook';

export default function Provider({ children }) {
  // USER --------------------------------------------------------------------
  const [login, setlogin] = useState(false);

  // estados da requisição --------
  const [userData, setUserData] = useState({});

  // PRODUTOS ----------------------------------------------------------------
  const [prodCart, setProdCart] = useState(0);
  const [productsData, setProductsData] = useProductsApi(login, userData);
  const [totalPrice, setTotalPrice] = useUpdatePriceApi(prodCart);

  // Seller ------------------------------------------------------------------
  const [cart, setCart] = useState(false);
  const [sellerData, setSellerData] = useSellerApi(cart, userData);

  const contexMemo = useMemo(() => ({
    sellerData,
    setSellerData,
    totalPrice,
    setTotalPrice,
    setProdCart,
    prodCart,
    setlogin,
    login,
    cart,
    setCart,
    userData,
    setUserData,
    setProductsData,
    productsData,
  }), [
    cart,
    login,
    prodCart,
    productsData,
    sellerData, setProductsData, setSellerData, setTotalPrice, totalPrice, userData]);

  return (
    <Context.Provider value={ contexMemo }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
