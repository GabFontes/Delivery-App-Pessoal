import axios from 'axios';

async function PostSale(sale, token) {
  console.log('🚀 ~ file: PostSale.js ~ line 4 ~ PostSale ~ sale', sale);

  try {
    const config = {
      body: { ...sale },
      headers: { authorization: token },
    };
    const url = 'http://localhost:3001/sales';
    const resp = await axios.post(url, config);
    console.log('🚀 ~ file: PostSale.js ~ line 11 ~ PostSale ~ sale', sale);
    const { data } = resp;
    console.log(data);
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
