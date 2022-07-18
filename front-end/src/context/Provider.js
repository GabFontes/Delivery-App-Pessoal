import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useProductsApi from '../hooks/productHook';

export default function Provider({ children }) {
  // USER ----------------------------------------------
  // const [userMail, setUserMail] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  // const [userName, setUserName] = useState('');
  const [login, setlogin] = useState(false);

  // estados da requisição --------
  const [userData, setUserData] = useState({});

  // PRODUTOS ---------------------------------------------------------------
  const [productsData, setProductsData] = useProductsApi(login, userData.token);

  const contextValue = {
    // USER -------------------
    // userMail,
    // setUserMail,
    // userPassword,
    // setUserPassword,
    // loginData,
    // setLoginData,
    // registerData,
    // setRegisterData,
    // userName,
    // setUserName,
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
