import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  // USER ----------------------------------------------
  // const [userMail, setUserMail] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  // const [userName, setUserName] = useState('');
  const [loginData, setLoginData] = useState({});
  const [registerData, setRegisterData] = useState({});

  const contextValue = {
    // USER -------------------
    userMail,
    setUserMail,
    userPassword,
    setUserPassword,
    loginData,
    setLoginData,
    registerData,
    setRegisterData,
    userName,
    setUserName,
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
