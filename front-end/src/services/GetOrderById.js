import axios from 'axios';

async function GetOrdersById(id, token) {
  try {
    const url = `http://localhost:3001/sales/${id}`;
    const resp = await axios.get(url, { headers: { authorization: token } });
    const { data } = resp;
    return data;
  } catch (error) {
    return error;
  }
}

export default GetOrdersById;

// const getSaleByIdResponse = {
//   id: 4,
//   userId: 4,
//   sellerId: 2,
//   totalPrice: '20.00',
//   deliveryAddress: 'Rua dos Tolod, Nº90',
//   deliveryNumber: '000',
//   saleDate: '2022-07-21T19:18:49.000Z',
//   status: 'Pendente',
//   user: {
//     id: 4,
//     name: 'Thauler Mayrink',
//     email: 'thauler98@email.com',
//     role: 'customer',
//   },
//   seller: {
//     id: 2,
//     name: 'Fulana Pereira',
//     email: 'fulana@deliveryapp.com',
//     role: 'seller',
//   },
//   products: [
//     {
//       id: 9,
//       name: 'Becks 600ml',
//       price: '8.89',
//       urlImage: 'http://localhost:3001/images/becks_600ml.jpg',
//       SaleProduct: {
//         quantity: 20,
//       },
//     },
//     {
//       id: 11,
//       name: 'Stella Artois 275ml',
//       price: '3.49',
//       urlImage: 'http://localhost:3001/images/stella_artois_275ml.jpg',
//       SaleProduct: {
//         quantity: 30,
//       },
//     },
//   ],
// };
