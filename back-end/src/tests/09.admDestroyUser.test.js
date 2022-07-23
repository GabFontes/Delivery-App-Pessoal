const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { User } = require('../database/models');
const { createdUser, modelUserReturn } = require('./mocks/users.mock');
const { adminToken, failedToken, sucessfullToken } = require('./mocks/token.mock');
const { createAdminRequest, createAdminResponse } = require('./mocks/admin.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: DELETE/admin/:id', () => {
  describe('SUCESSO - admin - É possível deletar um usuário', () => {
   
    let chaiHttpResponse;
    let userFoundStub;
    let userDeletedStub

    before(async () => {
      userFoundStub = sinon.stub(User, "findOne").resolves(createdUser);
      userDeletedStub = sinon.stub(User, "destroy").resolves();
    })

    after(() => {
      userFoundStub.restore()
      userDeletedStub.restore();
    })

    it('48. Sucesso - ADMIN - É possível deletar o usuário', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .delete('/admin/1')
      .set('authorization', adminToken);

      expect(chaiHttpResponse.status).to.be.equal(201);

      // expect(chaiHttpResponse.body).to.deep.equal(createdUser);
    });
  });
});

describe('FALHAS - na Requisição - não é possível deletar o usuário', () => {
  let chaiHttpResponse;

   it('49. Falha - requisição sem token', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .delete('/admin/1');

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Token not found' });
  });

  it('50. Falha - requisição com token inválido', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .delete('/admin/1')
    .set('authorization', failedToken)

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Expired or invalid token' });
  });

  it('51. Falha - requisição com token que não é admin', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .delete('/admin/1')
    .set('authorization', sucessfullToken);

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : "You do not have permission to access this page" });
  });
});

describe('ROTA: POST/admin', () => {
  describe('FALHA - não é possível criar um novo usuário', () => {
    
    let chaiHttpResponse;
    let userFoundStub;

    before(async () => {
      userFoundStub = sinon.stub(User, "findOne").resolves(null);
    })

    after(() => {
      userFoundStub.restore()
    })

    it('52. Falha - admin- user not found', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .delete('/admin/1')
      .set('authorization', adminToken);


      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'User not found' });
    });
  });
})
