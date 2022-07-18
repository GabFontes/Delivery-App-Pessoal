import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useProductsApi from '../hooks/productHook';

export default function Provider({ children }) {
  // USER ----------------------------------------------
  const [login, setlogin] = useState(false);
  const [registerData, setRegisterData] = useState(false);

  // estados da requisição --------
  const [userData, setUserData] = useState({});

  // PRODUTOS ---------------------------------------------------------------
  const [productsData, setProductsData] = useProductsApi(login, userData.token);

  const contextValue = {
    // USER -------------------
    registerData,
    setRegisterData,
    // FORM -------------------
    setlogin,
    login,
    // REQUISIÇÃO -------------
    userData,
    setUserData,
    // PRODUCTS ----------------
    setProductsData,
    productsData,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
