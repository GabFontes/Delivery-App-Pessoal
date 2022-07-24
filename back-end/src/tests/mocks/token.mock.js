const JWTreader = require('../../utils/jwt.reader');
const { sign } = require('jsonwebtoken');

const userSucessToken = sign({
  role: 'customer'
}, JWTreader(), {
  subject: String(1),
  expiresIn: '1d',
});

const admSucessToken = sign({
  role: 'administrator'
}, JWTreader(), {
  subject: String(1),
  expiresIn: '1d',
});

const sucessfullToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NTg1MjA2MzEsImV4cCI6MTY1ODYwNzAzMSwic3ViIjoiMyJ9.jL5oRNpUx99RmVYFSaWWRRvhuYk0qL6lg2_R86-YAck';

const failedToken = 'jsjsjsjsjsjsjsjsjsj';

const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTY1ODU4OTI4NCwiZXhwIjoxNjU4Njc1Njg0LCJzdWIiOiIxIn0.82O7G_1E7LqDHjDMhcQ0M3LD8IhdiyQ7qbY8qMNxh94';

module.exports = {
  userSucessToken,
  admSucessToken,
  sucessfullToken,
  failedToken,
  adminToken
}
