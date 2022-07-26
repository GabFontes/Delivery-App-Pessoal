// retorna todos os usuários que não são administradores
// GET
// precisa de token
// === /admin ===

const getAllResponse = [
  {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
  {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
];

// cria um usuário podendo escolher o role
// POST
// precisa de token
// === /admin ===

const createAdminRequest = {
  name: 'Gabriel Fontes',
  email: 'gabfontes@email.com',
  password: 'testando',
  role: 'seller',
};

const createAdminResponse = {
  user: {
    id: 5,
    name: 'Gabriel Fontes',
    email: 'gabfontes@email.com',
    password: 'caa9c8f8620cbb30679026bb6427e11f',
    role: 'seller',
  },
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VsbGVyIiwiaWF0IjoxNjU4NTE4O
  TU0LCJleHAiOjE2NTg2MDUzNTQsInN1YiI6IjUifQ.tLqkoXyU4khKmDGSlY8N0eNHKcIlb39V25BJA4rXzv0`,
};

// deleta um usuário pelo id
// DELETE
// precisa de token
// === /admin/*id* ===
// retorna 1 caso deletado com sucesso ou uma mensagem de erro 'User not found', 404

module.exports = {
  createAdminRequest,
  createAdminResponse,
  getAllResponse,
};
