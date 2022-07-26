import axios from 'axios';

async function PostSale(sale, token) {
  // console.log('🚀 ~ file: PostSale.js ~ line 4 ~ PostSale ~ sale', sale);
  // console.log('🚀 ~ file: PostSale.js ~ line 5 ~ PostSale ~ token', token);

  try {
    const url = 'http://localhost:3001/sales';
    const resp = await axios.post(url, sale, { headers: { authorization: token } });
    const { data } = resp;
    // console.log('🚀 ~ file: PostSale.js ~ line 15 ~ PostSale ~ data', data);
    return data;
  } catch (err) {
    return err;
  }
}

export default PostSale;

// const dataWithConvertedDate = {
//   ...data,
//   saleDate: new Date(saleDate).toLocaleDateString('pt-BR'),
// };

// const CreateSaleRequest = {
//   sale: {
//     sellerId: 2,
//     totalPrice: '20.00',
//     deliveryAddress: 'Rua dos Tolod, Nº909',
//     deliveryNumber: '000',
//   },
//   products: [{
//     productId: 9,
//     quantity: 20,
//   },
//   {
//     productId: 11,
//     quantity: 30,
//   }],
// };
