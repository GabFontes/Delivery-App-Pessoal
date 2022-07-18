import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import LoginForm from '../components/templates/LoginForm';

export default function Login() {
  const history = useHistory();
  const location = useLocation();

  const redirect = () => {
    const currentPathName = location.pathname.includes('/login');
    return !currentPathName && history.push('/login');
  };

  redirect();

  return (
    <div>
      <h1>Login</h1>

      <LoginForm />
    </div>
  );
}
