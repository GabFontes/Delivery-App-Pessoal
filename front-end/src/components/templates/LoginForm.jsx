import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import Context from '../../context/Context';
import PostLogin from '../../services/PostLogin';

export default function LoginForm() {
  // ESTADOS -----------------------------------
  const {
    userMail,
    setUserMail,
    userPassword,
    setUserPassword,
    // loginData,
    // setLoginData,
  } = useContext(Context);

  // CONSTANTES ---------------------------------
  const minCaracs = 6;
  const history = useHistory();
  const [btnLogin, setBtnLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);

  // FUNÇÕES -------------------------------------
  const mailValidator = (email) => {
    const mailRegex = /\S+@\S+\.\S+/;
    return mailRegex.test(email);
  };

  const btnChange = () => {
    if (mailValidator(userMail) && userPassword.length >= minCaracs) {
      return setBtnLogin(false);
    }
    return setBtnLogin(true);
  };

  useEffect(() => {
    btnChange();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMail, userPassword]);

  // todas as vezes que a pagina é carregada o setErrorMsg se altera para false
  useEffect(() => {
    setErrorMsg(false);
  }, []);

  const handleEmail = (e) => {
    setUserMail(e.target.value);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleLogin = async () => {
    // Requisição post --------------
    const data = await PostLogin({ email: userMail, password: userPassword });

    if (!data.user) {
      setUserMail('');
      setUserPassword('');
      return setErrorMsg(true);
    }

    // setLoginData(data);

    // console.log('role:', data.user.role);

    // // Redirecionamento de rota -------------
    // if (data.user.role === 'seller') return history.push('/seller/orders');

    // if (data.user.role === 'administrator') return history.push('/admin/manage');

    // if (data.user.role === 'customer') return history.push('/customer/products');
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
          value={ userMail }
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
          nameView="Cadastrar"
          testid="common_login__button-register"
          onClick={ handleRegister }
          name="BtnRegister"
        />
      </form>
      { errorMsg
        && <div testid="common_login__element-invalid-email">Erro Login</div> }
    </div>
  );
}
