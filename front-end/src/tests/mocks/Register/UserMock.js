// cria um usuário e gera um token
// POST
// === /register ===
const registerResponse = {
  user: {
    id: 4,
    name: 'Thauler Mayrink',
    email: 'thauler98@email.com',
    password: 'caa9c8f8620cbb30679026bb6427e11f',
    role: 'customer',
  },
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTg0MzA3NzQsImV4cC
  I6MTY1ODUxNzE3NCwic3ViIjoiNCJ9.rYM6SpvXPgL2LAX__H8Nbp_pCbMzAISuDhMkNXQuAHs`,
};

export const registerRequest = {
  name: 'Thauler Mayrink',
  email: 'thauler98@email.com',
  password: 'testando',
};

export default registerResponse;
// module.exports = {
//   registerRequest,
//   registerResponse,
// };
