import axios from 'axios';

async function PostSale(sale, token) {
  const config = {
    headers: { Authorization: token },
  };

  try {
    const url = 'http://localhost:3001/sales';
    const resp = await axios.post(url, sale, config);
    const { data } = resp;
    const dataWithConvertedDate = {
      ...data,
      saleDate: new Date(saleDate).toLocaleDateString('pt-BR'),
    };
    return dataWithConvertedDate;
  } catch (err) {
    return err;
  }
}

export default PostSale;

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
