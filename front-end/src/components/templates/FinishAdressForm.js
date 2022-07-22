import React from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import SelectInput from '../atoms/SellerSelectInput';
import PostSale from '../../services/PostSale';
import GetSellers from '../../services/GetSellers';
import Context from '../../context/Context';
import { readProducts } from '../../services/AddProducts';

export default function FinishOrderForm() {
  // ESTADOS -----------------------------------
  const {
    totalPrice,
  } = React.useContext(Context);
  // const [cartItens, setCartItens] = useState(readProducts());
  const [deliveryAddress, setDeliveryAddress] = React.useState();
  const [deliveryNumber, setDeliveryNumber] = React.useState();
  const [sellerId, setSellerId] = React.useState();

  // CONSTANTES ---------------------------------
  const history = useHistory();
  const cartItens = readProducts();
  const { quantity, id } = cartItens;
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
  };

  const selectSeller = async () => {
    const data = await GetSellers(token);
    if (!data.length) {
      return console.log('erro-selectSeller');
    }
    return data;
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
      products: [
        {
          productId: id,
          quantity,
        },
      ],
    }, token);

    if (!saleDetails) {
      return console.log('erro-handleFormSend');
    }

    history.push(`/customer/orders/${saleDetails.id}`);
  };

  // -------------------------------------------------
  return (
    <div>
      <form action="">

        <SelectInput
          sellerOptions={ selectSeller }
          sellerValue={ handleSeller }
        />
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
          type="number"
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
