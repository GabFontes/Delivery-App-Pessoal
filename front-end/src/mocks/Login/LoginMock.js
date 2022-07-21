// faz o login do usuário
// POST
// === /login ===
const longinResponse = {
  user: {
    id: 4,
    name: 'Thauler Mayrink',
    email: 'thauler98@email.com',
    password: 'caa9c8f8620cbb30679026bb6427e11f',
    role: 'customer',
  },
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  .eyJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NTg0Mzg1NTYsImV4cCI6MTY1ODUyNDk1Niwic3ViIjoiNCJ9
  .MBUexrn850cQlGKabHTeSZD0gf7GVbQoo0oYQ7Mf5bI`,
};

const loginRequest = {
  email: 'thauler98@email.com',
  password: 'testando',
};

module.exports = {
  loginRequest,
  longinResponse,
};
