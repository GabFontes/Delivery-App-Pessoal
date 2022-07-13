import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  // USER ----------------------------------------------
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loginData, setLoginData] = useState({});

  // todas as vezes que a pagina é carregada o setErrorMsg se altera para ''
  useEffect(() => {
    setErrorMsg('');
  }, []);

  const contextValue = {
    // USER -------------------
    userMail,
    setUserMail,
    userPassword,
    setUserPassword,
    loginData,
    setLoginData,
    errorMsg,
    setErrorMsg,
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
