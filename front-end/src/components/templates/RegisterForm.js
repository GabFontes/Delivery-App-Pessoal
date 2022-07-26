import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import Context from '../../context/Context';
import PostRegister from '../../services/PostRegister';
import { setIsLogger, saveUser } from '../../services/setUserLocal';

export default function RegisterForm() {
  // ESTADOS -----------------------------------
  const {
    setlogin,
  } = useContext(Context);

  // CONSTANTES ---------------------------------
  const commonRegister = 'common_register__element-invalid_register';
  const minNameCaracs = 12;
  const minPassCaracs = 6;
  const history = useHistory();
  const [btnRegister, setBtnRegister] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // FUNÇÕES -------------------------------------
  const mailValidator = (email) => {
    const mailRegex = /\S+@\S+\.\S+/;
    return mailRegex.test(email);
  };

  // todas as vezes que a pagina é carregada o setErrorMsg se altera para false
  useEffect(() => {
    setErrorMsg(false);
  }, []);

  const handleName = ({ target: { value } }) => {
    setUserName(value);
    if (mailValidator(userEmail)
      && userPassword.length >= minPassCaracs && value.length >= minNameCaracs) {
      return setBtnRegister(false);
    }
    return setBtnRegister(true);
  };

  const handleEmail = ({ target: { value } }) => {
    setUserEmail(value);
    if (mailValidator(value)
      && userPassword.length >= minPassCaracs && userName.length >= minNameCaracs) {
      return setBtnRegister(false);
    }
    return setBtnRegister(true);
  };

  const handlePassword = ({ target: { value } }) => {
    setUserPassword(value);
    if (mailValidator(userEmail)
      && value.length >= minPassCaracs && userName.length >= minNameCaracs) {
      return setBtnRegister(false);
    }
    return setBtnRegister(true);
  };

  const handleRegister = async () => {
    // Requisição post --------------
    const data = await PostRegister({
      name: userName, email: userEmail, password: userPassword });

    if (!data.user) {
      return setErrorMsg(true);
    }
    const { name, email, role } = data.user;
    const { token } = data;
    // Redirecionamento de rota -------------

    saveUser({ name, email, role, token });
    // setUserData(data);
    setlogin(true);
    setIsLogger(true);
    history.push('/customer/products');
  };

  // -------------------------------------------------
  return (
    <div>
      <form action="">
        <InputText
          testid="common_register__input-name"
          type="text"
          name="name"
          placeholder="Nome"
          value={ userName }
          onChange={ handleName }
        />
        <InputText
          testid="common_register__input-email"
          type="email"
          name="userMail"
          placeholder="Email"
          value={ userEmail }
          onChange={ handleEmail }
        />
        <InputText
          testid="common_register__input-password"
          type="password"
          name="userPassword"
          placeholder="Senha"
          value={ userPassword }
          onChange={ handlePassword }
        />
        <Button
          nameView="Cadastrar"
          testid="common_register__button-register"
          onClick={ handleRegister }
          disabled={ btnRegister }
          name="btnRegister"
        />
      </form>
      { errorMsg
        && <div data-testid={ commonRegister }>Erro no cadastro</div> }
    </div>
  );
}
