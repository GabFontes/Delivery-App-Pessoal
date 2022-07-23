import React, { useState } from 'react';
import PostRegister from '../../services/PostRegister';
import Button from '../atoms/Button';
import InputDropDown from '../atoms/InputDropDown';
import InputText from '../atoms/InputText';

export default function NewUserForm() {
  // CONSTANTES -------------------------------
  const errorMessage = 'admin_manage__element-invalid-register';
  const minNameCaracs = 12;
  const minPassCaracs = 6;
  const [errorMsg, setErrorMsg] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState(user);
  const [btnRegister, setBtnRegister] = useState(true);

  // FUNÇÕES ----------------------------------
  const mailValidator = (email) => {
    const mailRegex = /\S+@\S+\.\S+/;
    return mailRegex.test(email);
  };

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

  const handleRole = ({ target: { value } }) => {
    setUserRole(value);
  };

  const handleRegister = async () => {
    const data = await PostRegister({
      name: userName, email: userEmail, password: userPassword, role: userRole,
    });

    if (!data.user) {
      return setErrorMsg(true);
    }
  };

  return (
    <div>
      <form action="">
        <InputText
          testid="admin_manage__input-name"
          type="text"
          name="userName"
          placeholder="Nome e sobrenome"
          value={ userName }
          onChange={ handleName }
        />
        <InputText
          testid="admin_manage__input-email"
          type="email"
          name="userMail"
          placeholder="Email"
          value={ userEmail }
          onChange={ handleEmail }
        />
        <InputText
          testid="admin_manage__input-password"
          type="password"
          name="userPassword"
          placeholder="**********"
          value={ userPassword }
          onChange={ handlePassword }
        />
        <InputDropDown
          name="Nome"
          testid="admin_manage__select-role"
          // options={ [
          //   {admin: 'Administrador' },
          //   { seller: 'Vendedor' },
          //   { user: 'Usuário' }] }
          options={ ['user', 'admin', 'seller'] }
          onChange={ handleRole }
        />
        <Button
          nameView="Cadastrar"
          testid="admin_manage__button-register"
          onClick={ handleRegister }
          disabled={ btnRegister }
          name="btnRegister"
        />
      </form>
      { errorMsg
        && <div data-testid={ errorMessage }>Erro no cadastro</div> }
    </div>
  );
}
