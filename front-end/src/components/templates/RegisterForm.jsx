import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import Context from '../../context/Context';
import PostRegister from '../../services/PostRegister';

export default function RegisterForm() {
  // ESTADOS -----------------------------------
  const {
    userMail,
    userName,
    setUserName,
    setUserMail,
    userPassword,
    setUserPassword,
    setRegisterData,
  } = useContext(Context);

  // CONSTANTES ---------------------------------
  const commonRegister = 'common_register__element-invalid_register';
  const minNameCaracs = 12;
  const minPassCaracs = 6;
  const history = useHistory();
  const [btnRegister, setBtnRegister] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);

  // FUNÇÕES -------------------------------------
  const mailValidator = (email) => {
    const mailRegex = /\S+@\S+\.\S+/;
    return mailRegex.test(email);
  };

  const btnChange = () => {
    if (mailValidator(userMail)
      && userPassword.length >= minPassCaracs && userName.length >= minNameCaracs) {
      return setBtnRegister(false);
    }
    return setBtnRegister(true);
  };

  useEffect(() => {
    btnChange();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMail, userPassword, userName]);

  // todas as vezes que a pagina é carregada o setErrorMsg se altera para false
  useEffect(() => {
    setErrorMsg(false);
  }, []);

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setUserMail(e.target.value);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleRegister = async () => {
    // Requisição post --------------
    const data = await PostRegister({
      name: userName, email: userMail, password: userPassword });

    if (data.id) {
      // Redirecionamento de rota -------------
      setRegisterData(data);
      history.push('/customer/products');
    }

    setErrorMsg(true);
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
          value={ userMail }
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
