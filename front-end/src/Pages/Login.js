import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import LoginForm from '../components/templates/LoginForm';
import Context from '../context/Context';

export default function Login() {
  const history = useHistory();
  const location = useLocation();

  const {
    login,
    // userData,
  } = useContext(Context);

  const redirect = () => {
    const currentPathName = location.pathname.includes('/login');
    if (login) {
      history.push('/customer/products');
    }
    return !currentPathName && history.push('/login');
  };

  redirect();

  const readUser = JSON.parse(localStorage.getItem('user'));
  console.log('user ->', readUser);

  return (
    <div>
      <h1>Login</h1>

      <LoginForm />
    </div>
  );
}
