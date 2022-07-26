import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useProductsApi from '../hooks/productHook';
import useUpdatePriceApi from '../hooks/totalPriceHook';
import useSellerApi from '../hooks/sellerHook';
import useOrdersApi from '../hooks/ordersHook';
import useOrdersByIdApi from '../hooks/ordersByIdHook';
import useSetUser from '../hooks/useUserHook';
import { getIsLogger } from '../services/setUserLocal';

export default function Provider({ children }) {
  // USER --------------------------------------------------------------------
  const [login, setlogin] = useState(false);
  // estados da requisição --------
  const [userData, setUserData] = useSetUser(login);

  // PRODUTOS ----------------------------------------------------------------
  const [prodCart, setProdCart] = useState(0);
  const [productsData, setProductsData] = useProductsApi(login);
  const [totalPrice, setTotalPrice] = useUpdatePriceApi(prodCart);

  // Seller ------------------------------------------------------------------
  const [cart, setCart] = useState(false);
  const [sellerData, setSellerData] = useSellerApi(cart, userData);

  // ORDERS ------------------------------------------------------------------
  const [orders, setOrders] = useState(false);
  const [ordersData, setordersData] = useOrdersApi(orders, userData);

  const [orderById, setOrderById] = React.useState(false);
  const [pId, setPId] = React.useState(0);
  const [ordersByIdData, setOrdersByIdData] = useOrdersByIdApi(pId, orderById, userData);

  useEffect(() => {
    const isLogged = getIsLogger();
    setlogin(isLogged);
  }, []);

  const contexMemo = useMemo(() => ({
    pId,
    setPId,
    orderById,
    setOrderById,
    ordersByIdData,
    setOrdersByIdData,
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
    orders,
    setOrders,
    ordersData,
    setordersData,
  }), [
    pId,
    orderById,
    ordersByIdData,
    setOrdersByIdData, sellerData, setSellerData, totalPrice, setTotalPrice,
    prodCart,
    login,
    cart,
    userData,
    setUserData,
    setProductsData,
    productsData,
    orders,
    ordersData,
    setordersData,

  ]);

  return (
    <Context.Provider value={ contexMemo }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
