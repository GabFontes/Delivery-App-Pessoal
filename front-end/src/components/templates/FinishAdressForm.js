import React from 'react';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
// import SelectInput from '../atoms/SellerSelectInput';
import PostSale from '../../services/PostSale';
// import GetSellers from '../../services/GetSellers';
import Context from '../../context/Context';
import { readProducts } from '../../services/AddProducts';

export default function FinishOrderForm() {
  // ESTADOS -----------------------------------
  const {
    totalPrice,
    sellerData,
    // sellerId,
  } = React.useContext(Context);
  // const [cartItens, setCartItens] = useState(readProducts());
  const [deliveryAddress, setDeliveryAddress] = React.useState('');
  const [deliveryNumber, setDeliveryNumber] = React.useState('');
  const [sellerId, setSellerId] = React.useState('');

  // CONSTANTES ---------------------------------
  const history = useHistory();
  const cartItens = readProducts();
  const userData = () => JSON.parse(localStorage.getItem('user'));
  const { token } = userData();
  // FUNÇÕES -------------------------------------

  const handleAddressNumber = (e) => {
    const { value } = e.target;
    setDeliveryNumber(value);
  };

  const handleAddress = (e) => {
    const { value } = e.target;
    setDeliveryAddress(value);
  };
  const handleSeller = (e) => {
    const { value } = e.target;
    setSellerId(value);
    console.log('🚀  ~ line 54 ~ handleFormSend ~ sellerId', sellerId);
  };

  // Requisição post --------------
  const handleFormSend = async () => {
    const saleDetails = await PostSale({
      sale: {
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
      },
      products: cartItens.map(({ id, quantity }) => ({ id, quantity })),
    }, token);
    console.log('🚀 ~ file: ~ line 57 ~ handleFormSend ~ saleDetails', saleDetails);
    console.log('🚀 ~ FinishAdressForm.js ~ line 57 ~ handleFormSend ~ token', token);

    if (!saleDetails) {
      return console.log('erro-handleFormSend');
    }

    history.push(`/customer/orders/${saleDetails.sale.id}`);
  };

  // -------------------------------------------------

  console.log('🚀 ~ line 63 ~ FinishOrderForm ~ sellerData', sellerData);
  // const multipleSelect = true;
  return (
    <div>
      <form action="">
        <select
          // multiple={ multipleSelect }
          value={ sellerData }
          data-testid="customer_checkout__select-seller"
          onChange={ handleSeller }
        >
          {
            sellerData.map(({ name, id }, index) => (
              <option
                value={ id }
                key={ index }
                onClick={ handleSeller }
              >
                { name }
              </option>
            ))
          }
        </select>
        {/* <SelectInput /> */ }
        <InputText
          testid="customer_checkout__input-address"
          type="text"
          name="adress"
          placeholder="Endereço"
          value={ deliveryAddress }
          onChange={ handleAddress }
        />
        <InputText
          testid="customer_checkout__input-addressNumber"
          type="text"
          name="addressNumber"
          placeholder="Numero"
          value={ deliveryNumber }
          onChange={ handleAddressNumber }
        />
        <Button
          nameView="Finalizar pedido"
          testid="customer_checkout__button-submit-order"
          onClick={ handleFormSend }
          name="BtnRegister"
        />
      </form>
    </div>
  );
}
