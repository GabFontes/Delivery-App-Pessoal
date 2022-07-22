const createdUser = {
  user: {
    id: 4,
    name: 'Thauler Mayrink',
    email: 'thauler98@email.com',
    password: 'caa9c8f8620cbb30679026bb6427e11f',
    role: 'customer',
  },
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTg1MjI0ODIsImV4cCI6MTY1ODYwODg4Miwic3ViIjoidW5kZWZpbmVkIn0.R89nosWxxQsjKAdHo0OgiQj4-ePQVV_VuUtGPEBQB-A`,
};

const modelUserReturn = {
  dataValues: {
    id: 4,
    name: 'Thauler Mayrink',
    email: 'thauler98@email.com',
    password: 'caa9c8f8620cbb30679026bb6427e11f',
    role: 'customer',
  }
}

const registerUser = {
  name: 'Thauler Mayrink',
  email: 'thauler98@email.com',
  password: 'testando',
}

module.exports = {
  createdUser,
  registerUser,
  modelUserReturn
}
