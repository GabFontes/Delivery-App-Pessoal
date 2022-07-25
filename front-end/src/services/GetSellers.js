import axios from 'axios';

async function GetSellers(token) {
  console.log('🚀 ~ file: GetSellers.js ~ line 4 ~ GetSellers ~ token', token);
  try {
    const url = 'http://localhost:3001/seller';
    const resp = await axios.get(url, { headers: { authorization: token } });
    const { data } = resp;
    return data;
  } catch (error) {
    return error;
  }
}

export default GetSellers;

//   [
//   {
//     id: 2,
//     name: 'Fulana Pereira',
//     email: 'fulana@deliveryapp.com',
//     password: '3c28d2b0881bf46457a853e0b07531c6',
//     role: 'seller',
//   },
//   {
//     id: 5,
//     name: 'Gabriel Fontes',
//     email: 'gabfontes@email.com',
//     password: 'caa9c8f8620cbb30679026bb6427e11f',
//     role: 'seller',
//   },
// ];
