import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useProductsApi from '../hooks/productHook';
import useUpdatePriceApi from '../hooks/totalPriceHook';
import useSellerApi from '../hooks/sellerHook';
import useOrdersApi from '../hooks/ordersHook';
import useOrdersByIdApi from '../hooks/ordersByIdHook';

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

  // ORDERS ------------------------------------------------------------------
  const [orders, setOrders] = useState(false);
  const [ordersData, setordersData] = useOrdersApi(orders, userData);

  const [orderById, setOrderById] = React.useState(false);
  const [pId, setPId] = React.useState(0);
  const [ordersByIdData, setOrdersByIdData] = useOrdersByIdApi(pId, orderById, userData);

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
    ordersByIdData,
    setOrdersByIdData,
    pId,
    orderById,
    cart,
    login,
    prodCart,
    ordersData,
    setordersData,
    orders,
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
