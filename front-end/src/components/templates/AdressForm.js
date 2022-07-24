import React from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import PostSale from '../../services/PostSale';
import { readProducts } from '../../services/AddProducts';

export default function AdressForm() {
  // CONTEXT -----------------------------------------------------------------------------
  const {
    sellerData,
    userData,
    totalPrice,
  } = React.useContext(Context);

  // CONSTANTES --------------------------------------------------------------------------
  const history = useHistory();
  const cartItens = readProducts();
  const initialForm = { adress: '', addressNumber: '', sellerId: 0 };
  const [formData, setFormData] = React.useState(initialForm);
  const { token } = userData;

  // FUNÇÕES -----------------------------------------------------------------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formValues = (event) => {
    event.preventDefault();
    const newFormData = new FormData(event.target);
    return Object.fromEntries(newFormData);
  };

  const handleSubmit = async (e) => {
    const values = formValues(e);

    const saleDetails = await PostSale({
      sale: {
        sellerId: values.sellerId,
        totalPrice,
        deliveryAddress: values.adress,
        deliveryNumber: values.addressNumber,
      },
      products: cartItens.map(({ id, quantity }) => ({ productId: id, quantity })),
    }, token);

    history.push(`/customer/orders/${saleDetails.id}`);
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>

        <select
          data-testid="customer_checkout__select-seller"
          name="sellerId"
          onChange={ handleInputChange }
          value={ formData.sellerId }
        >
          {
            sellerData.map((data, i) => (
              <option value={ data.id } key={ i }>{ data.name }</option>
            ))
          }
        </select>

        <input
          data-testid="customer_checkout__input-address"
          type="text"
          name="adress"
          placeholder="Endereço"
          value={ formData.adress }
          onChange={ handleInputChange }
        />

        <input
          data-testid="customer_checkout__input-addressNumber"
          name="addressNumber"
          placeholder="Numero"
          value={ formData.addressNumber }
          onChange={ handleInputChange }
          type="text"
        />

        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar pedido
        </button>
      </form>
    </div>
  );
}
