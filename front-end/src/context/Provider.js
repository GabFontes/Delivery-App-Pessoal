import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  // USER --------------------------------------------------------------------------------
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const contextValue = {
    // USER ==========
    userMail,
    setUserMail,
    userPassword,
    setUserPassword,
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
