import React, { useLayoutEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import LoginForm from '../components/templates/LoginForm';
import { getIsLogger } from '../services/setUserLocal';

export default function Login() {
  const history = useHistory();
  const location = useLocation();

  useLayoutEffect(() => {
    const redirect = () => {
      const currentPathName = location.pathname.includes('/login');
      const isLogged = getIsLogger();
      if (isLogged) {
        history.push('/customer/products');
      }
      return !currentPathName && history.push('/login');
    };
    redirect();
  }, [history, location.pathname]);

  return (
    <div>
      <h1>Login</h1>

      <LoginForm />
    </div>
  );
}
