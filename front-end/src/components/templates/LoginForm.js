import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import Context from '../../context/Context';
import PostLogin from '../../services/PostLogin';
import { setIsLogger, saveUser } from '../../services/setUserLocal';

export default function LoginForm() {
  // ESTADOS -----------------------------------
  const {
    setlogin,
    // setUserData,
  } = useContext(Context);

  // CONSTANTES ---------------------------------
  const minCaracs = 6;
  const history = useHistory();
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const [btnLogin, setBtnLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);

  // FUNÇÕES -------------------------------------
  const mailValidator = (email) => {
    const mailRegex = /\S+@\S+\.\S+/;
    return mailRegex.test(email);
  };

  // todas as vezes que a pagina é carregada o setErrorMsg se altera para false
  useEffect(() => {
    setErrorMsg(false);
  }, []);

  const handleEmail = (e) => {
    const { value } = e.target;
    setuserEmail(value);
    if (mailValidator(value) && userPassword.length >= minCaracs) {
      return setBtnLogin(false);
    }
    return setBtnLogin(true);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setuserPassword(value);
    if (mailValidator(userEmail) && value.length >= minCaracs) {
      return setBtnLogin(false);
    }
    return setBtnLogin(true);
  };

  const handleLogin = async () => {
    // Requisição post --------------
    const data = await PostLogin({ email: userEmail, password: userPassword });

    if (!data.user) return setErrorMsg(true);
    const { name, email, role } = data.user;
    const { token } = data;
    // setUserData(data);
    saveUser({ name, email, role, token });
    setlogin(true);
    setIsLogger(true);

    // console.log('role:', data.user.role);

    // Redirecionamento de rota -------------
    if (data.user.role === 'seller') return history.push('/seller/orders');

    if (data.user.role === 'administrator') return history.push('/admin/manage');

    if (data.user.role === 'customer') return history.push('/customer/products');
  };

  const handleRegister = async () => {
    history.push('/register');
  };

  // -------------------------------------------------
  return (
    <div>
      <form action="">
        <InputText
          testid="common_login__input-email"
          type="email"
          name="userMail"
          placeholder="Email"
          value={ userEmail }
          onChange={ handleEmail }
        />
        <InputText
          testid="common_login__input-password"
          type="password"
          name="userPassword"
          placeholder="Senha"
          value={ userPassword }
          onChange={ handlePassword }
        />
        <Button
          nameView="Login"
          testid="common_login__button-login"
          onClick={ handleLogin }
          disabled={ btnLogin }
          name="BtnLogin"
        />
        <Button
          nameView="Botão de cadastro"
          testid="common_login__button-register"
          onClick={ handleRegister }
          name="BtnRegister"
        />
      </form>
      { errorMsg
        && <div data-testid="common_login__element-invalid-email">Erro Login</div> }
    </div>
  );
}
