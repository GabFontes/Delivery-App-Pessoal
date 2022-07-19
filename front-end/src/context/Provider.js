import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useProductsApi from '../hooks/productHook';

export default function Provider({ children }) {
  // USER ----------------------------------------------
  const [login, setlogin] = useState(false);

  // estados da requisição --------
  const [userData, setUserData] = useState({});

  // PRODUTOS ---------------------------------------------------------------
  const [productsData, setProductsData] = useProductsApi(login, userData);

  const contexMemo = useMemo(() => ({
    setlogin,
    login,
    userData,
    setUserData,
    setProductsData,
    productsData,
  }), [login, productsData, setProductsData, userData]);

  return (
    <Context.Provider value={ contexMemo }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
