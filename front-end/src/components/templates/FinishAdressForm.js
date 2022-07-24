import React from 'react';

export default function FinishOrderForm() {
  // ESTADOS -----------------------------------
  const {
    userData,
    // totalPrice,
    // sellerData,
    // sellerId,
  } = React.useContext(Context);
  // const [cartItens, setCartItens] = useState(readProducts());
  const [deliveryAddress, setDeliveryAddress] = React.useState('');
  const [deliveryNumber, setDeliveryNumber] = React.useState('');
  // const [sellerId, setSellerId] = React.useState('');

  // CONSTANTES ---------------------------------
  // const history = useHistory();
  // const cartItens = readProducts();
  const { token } = userData;
  console.log('🚀 ~ file: FinishAdressForm.js ~ line 29 ~ userData', userData);
  console.log('🚀 ~ file: FinishAdressForm.js ~ line 30 ~ token', token);

  // FUNÇÕES -------------------------------------
  const handleAddressNumber = (e) => {
    const { value } = e.target;
    setDeliveryNumber(value);
  };

  const handleAddress = (e) => {
    const { value } = e.target;
    setDeliveryAddress(value);
  };

  // const handleSeller = (e) => {
  //   const { value } = e.target;
  //   setSellerId(value);
  // };

  // Requisição post --------------
  const handleFormSend = async (e) => {
    // const saleDetails = await PostSale({
    //   sale: {
    //     sellerId: 2,
    //     totalPrice,
    //     deliveryAddress,
    //     deliveryNumber,
    //   },
    //   products: cartItens.map(({ id, quantity }) => ({ productId: id, quantity })),
    // }, token);

    // console.log('🚀 file: FinishAdressForm.js ~ handle ~ line 60 ~ token', token);
    // console.log('🚀 file: FinishAdressForm.js ~ handle ~ line 61 ~ etails', saleDetails);

    // history.push(`/customer/orders/${saleDetails.id}`);
  };

  // -------------------------------------------------

  return (
    <div>
      <form onSubmit={ handleFormSend }>
        {/* <select
          data-testid="customer_checkout__select-seller"
          onChange={ handleSeller }
        >
          {
            sellerData.map(({ id, name }, index) => (
              <option
                value={ id }
                key={ index }
              >
                { name }
              </option>
            ))
          }
        </select> */}

        {/* <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select> */}

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
        {/* <Button
          nameView="Finalizar pedido"
          testid="customer_checkout__button-submit-order"
          onClick={ handleFormSend }
          name="BtnRegister"
        /> */}

        <button
          type="submit"
          testid="customer_checkout__button-submit-order"
        >
          Finalizar pedido
        </button>
      </form>
    </div>
  );
}
