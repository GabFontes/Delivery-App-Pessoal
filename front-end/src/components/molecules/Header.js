import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import { setProduct } from '../../services/AddProducts';
import { deleteKeyLocal, setIsLogger } from '../../services/setUserLocal';
import Button from '../atoms/Button';

export default function Header() {
  // ESTADOS -----------------------------------
  const {
    userData,
  } = useContext(Context);

  // DATA-TESTIDS ----------------------------------
  const testidProducts = 'customer_products__element-navbar-link-products';
  const testidOrders = 'customer_products__element-navbar-link-orders';
  const testidUserName = 'customer_products__element-navbar-user-full-name';
  const testidLogOut = 'customer_products__element-navbar-link-logout';

  // CONSTANTES -----------------------------------------
  const history = useHistory();

  // FUNÇÕES --------------------------------------------
  const handleProducts = async () => {
    history.push('/customer/products');
  };

  const handleOrders = async () => {
    history.push('/customer/orders');
  };

  const handleLogOut = async () => {
    deleteKeyLocal('user');
    setIsLogger(false);
    setProduct([]);
    history.push('/login'); // apagar token
  };

  return (
    <header>
      <Button
        nameView="PRODUTOS"
        testid={ testidProducts }
        onClick={ handleProducts }
        name="produtos"
      />
      <Button
        nameView="MEUS PEDIDOS"
        testid={ testidOrders }
        onClick={ handleOrders }
        name="meus-pedidos"
      />
      <div data-testid={ testidUserName }>
        {!userData.user ? <h2>Carregando</h2> : userData.user.name }
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
