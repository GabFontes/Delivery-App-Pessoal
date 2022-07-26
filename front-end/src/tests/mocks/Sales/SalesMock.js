// Retorna todas as vendas pelo id do usuário que vem dentro do token
// precisa do token
// GET
// === /sales ===
export const getAllSalesByUserIdResponse = [{
  id: 3,
  userId: 4,
  sellerId: 2,
  totalPrice: '20.00',
  deliveryAddress: 'Rua dos Tolod, Nº9',
  deliveryNumber: '000',
  saleDate: '2022-07-21T19:13:31.000Z',
  status: 'Pendente',
},
{
  id: 4,
  userId: 4,
  sellerId: 2,
  totalPrice: '20.00',
  deliveryAddress: 'Rua dos Tolod, Nº90',
  deliveryNumber: '000',
  saleDate: '2022-07-21T19:18:49.000Z',
  status: 'Pendente',
}];

// =============//=============

// retorna a venda pelo id que vem no parâmetro da url
// precisa de token
// GET
// === /sales/*id* ===
export const getSaleByIdResponse = {
  id: 4,
  userId: 4,
  sellerId: 2,
  totalPrice: '20.00',
  deliveryAddress: 'Rua dos Tolod, Nº90',
  deliveryNumber: '000',
  saleDate: '2022-07-21T19:18:49.000Z',
  status: 'Pendente',
  user: {
    id: 4,
    name: 'Thauler Mayrink',
    email: 'thauler98@email.com',
    role: 'customer',
  },
  seller: {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    role: 'seller',
  },
  products: [
    {
      id: 9,
      name: 'Becks 600ml',
      price: '8.89',
      urlImage: 'http://localhost:3001/images/becks_600ml.jpg',
      SaleProduct: {
        quantity: 20,
      },
    },
    {
      id: 11,
      name: 'Stella Artois 275ml',
      price: '3.49',
      urlImage: 'http://localhost:3001/images/stella_artois_275ml.jpg',
      SaleProduct: {
        quantity: 30,
      },
    },
  ],
};

// cria uma venda
// precisa de token
// POST
// === /sales ===

export const CreateSaleRequest = {
  sale: {
    sellerId: 2,
    totalPrice: '20.00',
    deliveryAddress: 'Rua dos Tolod, Nº909',
    deliveryNumber: '000',
  },
  products: [{
    productId: 9,
    quantity: 20,
  },
  {
    productId: 11,
    quantity: 30,
  }],
};

export const CreateSaleResponse = {
  id: 14,
  userId: 4,
  sellerId: 2,
  totalPrice: '20.00',
  deliveryAddress: 'Rua dos Tolod, Nº909',
  deliveryNumber: '000',
  saleDate: '2022-07-21T21:27:47.000Z',
  status: 'Pendente',
  user: {
    id: 4,
    name: 'Thauler Mayrink',
    email: 'thauler98@email.com',
    role: 'customer',
  },
  seller: {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    role: 'seller',
  },
  products: [
    {
      id: 9,
      name: 'Becks 600ml',
      price: '8.89',
      urlImage: 'http://localhost:3001/images/becks_600ml.jpg',
      SaleProduct: {
        quantity: 20,
      },
    },
    {
      id: 11,
      name: 'Stella Artois 275ml',
      price: '3.49',
      urlImage: 'http://localhost:3001/images/stella_artois_275ml.jpg',
      SaleProduct: {
        quantity: 30,
      },
    },
  ],
};

// atualiza o status da venda correpondente ao id que vem no parâmetro da url
// precisa token
// PATCH
// === /sales/*id* ===

// const UpdateSalesRequest = {
//   status: 'Preparando',
// };
// patch status response

export const UpdateSalesResponse = {
  id: 14,
  userId: 4,
  sellerId: 2,
  totalPrice: '20.00',
  deliveryAddress: 'Rua dos Tolod, Nº9',
  deliveryNumber: '000',
  saleDate: '2022-07-21T21:27:47.000Z',
  status: 'Preparando',
};

// export default {
//   UpdateSalesRequest,
//   CreateSaleRequest,
//   CreateSaleResponse,
//   UpdateSalesResponse,
//   getAllSalesByUserIdResponse,
//   getSaleByIdResponse,
// };
