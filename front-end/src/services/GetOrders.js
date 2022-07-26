import axios from 'axios';

async function GetOrders(token) {
  try {
    const url = 'http://localhost:3001/sales';
    const resp = await axios.get(url, { headers: { authorization: token } });
    const { data } = resp;
    return data;
  } catch (error) {
    return error;
  }
}

export default GetOrders;

// const getAllSalesByUserIdResponse = [{
//   id: 3,
//   userId: 4,
//   sellerId: 2,
//   totalPrice: '20.00',
//   deliveryAddress: 'Rua dos Tolod, Nº9',
//   deliveryNumber: '000',
//   saleDate: '2022-07-21T19:13:31.000Z',
//   status: 'Pendente',
// },
