import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import Context from '../../context/Context';

export default function LoginForm() {
  // ESTADOS -----------------------------------
  const {
    userMail,
    setUserMail,
    userPassword,
    setUserPassword,
    // loginData,
    // setLoginData,
    errorMsg,
    // setErrorMsg,
  } = useContext(Context);

  // CONSTANTES ---------------------------------
  const minCaracs = 6;
  const history = useHistory();

  // FUNÇÕES -------------------------------------
  const mailValidator = (email) => {
    const mailRegex = /\S+@\S+\.\S+/;
    return mailRegex.test(email);
  };

  const handleLogin = async () => {
    // Requisição post --------------
    // const data = await PostLogin({ userMail, userPassword });
    // !data.name ? setErrorMsg(data.message) : setLoginData(data);

    // Redirecionamento de rota -------------
    // data.role === 'seller' && history.push('/seller/orders');
    // data.role === 'admin' && history.push('/admin/manage');
    history.push('/customer/products');
  };

  const handleRegister = async () => {
    history.push('/register');
  };

  // -------------------------------------------------
  return (
    <div>
      <form action="">
        <InputText
          data-testid="common_login__input-email"
          type="email"
          name="userMail"
          placeholder="Email"
          value={ userMail }
          onChange={ ({ target }) => setUserMail(target.value) }
        />
        <InputText
          data-testid="common_login__input-password"
          type="password"
          name="userPassword"
          placeholder="Senha"
          value={ userPassword }
          onChange={ ({ target }) => setUserPassword(target.value) }
        />
        <Button
          nameView="Login"
          testId="common_login__button-login"
          onClick={ handleLogin }
          disabled={ !(mailValidator(userMail) && (userPassword.length >= minCaracs)) }
          name="BtnLogin"
        />
        <Button
          nameView="Cadastrar"
          testId="common_login__button-register"
          onClick={ handleRegister }
          name="BtnRegister"
        />
      </form>
      <p
        data-testid="common_login__element-invalid-email"
      >
        { errorMsg !== '' && errorMsg }
      </p>
    </div>
  );
}
