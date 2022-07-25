const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { User } = require('../database/models');
const { admSucessToken, failedToken, userSucessToken } = require('./mocks/token.mock');
const { getAllResponse } = require('./mocks/admin.mock');


chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: GET/admin', () => {
  describe('SUCESSO - admin - É possível listar todos usuários', () => {
   
    let chaiHttpResponse;
    let usersFoundStub;

    before(async () => {
      usersFoundStub = sinon.stub(User, "findAll").resolves(getAllResponse);
    })

    after(() => {
      usersFoundStub.restore()
    })

    it('53. Sucesso - ADMIN - É possível listar todos os usuário', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/admin')
      .set('authorization', admSucessToken);

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.an('array');

      expect(chaiHttpResponse.body[0]).to.have.property('id');
      expect(chaiHttpResponse.body[0]).to.have.property('name');
      expect(chaiHttpResponse.body[0]).to.have.property('email');
      expect(chaiHttpResponse.body[0]).to.have.property('password');
      expect(chaiHttpResponse.body[0]).to.have.property('role');

      expect(chaiHttpResponse.body[1]).to.have.property('id');
      expect(chaiHttpResponse.body[1]).to.have.property('name');
      expect(chaiHttpResponse.body[1]).to.have.property('email');
      expect(chaiHttpResponse.body[1]).to.have.property('password');
      expect(chaiHttpResponse.body[1]).to.have.property('role');
  
    });
  });
});

describe('FALHAS - na Requisição - não é possível listar os usuários', () => {
  let chaiHttpResponse;

   it('54. Falha - requisição sem token', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/admin');

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Token not found' });
  });

  it('55. Falha - requisição com token inválido', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/admin')
    .set('authorization', failedToken)

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Expired or invalid token' });
  });

  it('56. Falha - requisição com token que não é admin', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/admin')
    .set('authorization', userSucessToken);

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : "You do not have permission to access this page" });
  });
});

describe('ROTA: GET/admin', () => {
  describe('FALHA - não é possível criar um novo usuário', () => {
    
    let chaiHttpResponse;
    let usersFoundStub;

    before(async () => {
      usersFoundStub = sinon.stub(User, "findAll").throws('error');
    })

    after(() => {
      usersFoundStub.restore()
    })
    it('57. Falha - internal error', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .delete('/admin/1')
      .set('authorization', admSucessToken);


      expect(chaiHttpResponse.status).to.be.equal(500);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'internal error' });
    });
  });
})
