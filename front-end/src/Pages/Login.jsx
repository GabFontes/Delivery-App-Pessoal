import React, { useLayoutEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import LoginForm from '../components/templates/LoginForm';
import Context from '../context/Context';

export default function Login() {
  const history = useHistory();
  const location = useLocation();

  const {
    setlogin,
    setUserData,
  } = useContext(Context);

  const redirect = () => {
    const currentPathName = location.pathname.includes('/login');
    return !currentPathName && history.push('/login');
  };

  useLayoutEffect(() => {
    setlogin(false);
    setUserData('');
  }, [setlogin, setUserData]);

  redirect();

  return (
    <div>
      <h1>Login</h1>

      <LoginForm />
    </div>
  );
}
