import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import { deleteKeyLocal } from '../../services/setUserLocal';
import Button from '../atoms/Button';

export default function HeaderAdmin() {
  // ESTADOS -----------------------------------
  const {
    userData,
  } = useContext(Context);

  // DATA-TESTIDS ----------------------------------
  // const testidProducts = 'customer_products__element-navbar-link-products';
  const testidOrders = 'customer_products__element-navbar-link-orders';
  const testidUserName = 'customer_products__element-navbar-user-full-name';
  const testidLogOut = 'customer_products__element-navbar-link-logout';

  // CONSTANTES -----------------------------------------
  const history = useHistory();
  const { user: { name, id } } = userData;

  // FUNÇÕES --------------------------------------------
  // const handleProducts = async () => {
  //   history.push('/customer/products');
  // };

  const handleOrders = async () => {
    history.push(`/customer/order/${id}`);
  };

  const handleLogOut = async () => {
    deleteKeyLocal('user');
    history.push('/login'); // apagar token
  };

  return (
    <header>
      {/* <Button
        nameView="PRODUTOS"
        testid={ testidProducts }
        onClick={ handleProducts }
        name="produtos"
      /> */}
      <Button
        nameView="MEUS PEDIDOS"
        testid={ testidOrders }
        onClick={ handleOrders }
        name="meus-pedidos"
      />
      <div data-testid={ testidUserName }>
        { name }
      </div>
      <Button
        nameView="SAIR"
        testid={ testidLogOut }
        onClick={ handleLogOut }
        name="sair"
      />
    </header>
  );
}
