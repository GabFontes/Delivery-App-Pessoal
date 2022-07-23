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

describe('ROTA: POST/admin', () => {
  describe('SUCESSO - admin - É possível criar um novo usuário', () => {
   
    let chaiHttpResponse;
    let userFoundStub;
    let userCreatedStub

    before(async () => {
      userFoundStub = sinon.stub(User, "findOne").resolves(null);
      userCreatedStub = sinon.stub(User, "create").resolves(modelUserReturn);
    })

    after(() => {
      userFoundStub.restore()
      userCreatedStub.restore();
    })

    it('36. Sucesso - ADMIN - É possível criar o usuário', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/admin')
      .set('authorization', adminToken)
      .send(createAdminRequest)


      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.have.property('user');
      expect(chaiHttpResponse.body.user).to.have.property('name');
      expect(chaiHttpResponse.body.user).to.have.property('email');
      expect(chaiHttpResponse.body.user).to.have.property('password');
      expect(chaiHttpResponse.body.user).to.have.property('role');
      expect(chaiHttpResponse.body).to.have.property('token');

      // expect(chaiHttpResponse.body).to.deep.equal(createdUser);
    });
  });
});

describe('FALHAS - na Requisição - não é possível criar um novo usuário', () => {
  let chaiHttpResponse;

  it('37. Falha - requisição sem email', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .set('authorization', adminToken)
    .send({
      name: 'Gabriel Fontes',
      password: 'testando',
      role: 'seller',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"email" is required"' });
  });

  it('38. Falha - email inválido (regex)', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .set('authorization', adminToken)
    .send({
      name: 'Gabriel Fontes',
      email: 'gabfontes',
      password: 'testando',
      role: 'seller',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"email" must be a valid email' });
  });

  it('39. Falha - requisição sem senha', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .set('authorization', adminToken)
    .send({
      name: 'Gabriel Fontes',
      email: 'gabfontes@email.com',
      role: 'seller',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"password" is required' });
  });
  
  it('40. Falha - senha menor que 6 caracteres', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .set('authorization', adminToken)
    .send({
      name: 'Gabriel Fontes',
      email: 'gabfontes@email.com',
      password: '11',
      role: 'seller',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"password" length must be 6 characters long' });
  });

  it('41. Falha - requisição sem nome', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .set('authorization', adminToken)
    .send({
      email: 'gabfontes@email.com',
      password: 'testando',
      role: 'seller',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"name" is required' });
  });

  it('42. Falha - nome com menos de 12 caracteres', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .set('authorization', adminToken)
    .send({
      name: 'Gab',
      email: 'gabfontes@email.com',
      password: 'testando',
      role: 'seller',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"name" length must be 12 characters long' });
  });

  it('43. Falha - requisição sem role', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .set('authorization', adminToken)
    .send({
      name: 'Gabriel Fontes',
      email: 'gabfontes@email.com',
      password: 'testando',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"role" is required' });
  });

  it('44. Falha - requisição sem token', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .send({
      name: 'Gabriel Fontes',
      email: 'gabfontes@email.com',
      password: 'testando',
      role: 'seller',
    })

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Token not found' });
  });

  it('45. Falha - requisição com token inválido', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .set('authorization', failedToken)
    .send({
      name: 'Gabriel Fontes',
      email: 'gabfontes@email.com',
      password: 'testando',
      role: 'seller',
    })

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Expired or invalid token' });
  });

  it('46. Falha - requisição com token que não é admin', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/admin')
    .set('authorization', sucessfullToken)
    .send({
      name: 'Gabriel Fontes',
      email: 'gabfontes@email.com',
      password: 'testando',
      role: 'seller',
    })

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : "You do not have permission to access this page" });
  });
});

describe('ROTA: POST/admin', () => {
  describe('FALHA - não é possível criar um novo usuário', () => {
    
    let chaiHttpResponse;
    let userFoundStub;

    before(async () => {
      userFoundStub = sinon.stub(User, "findOne").resolves(createdUser);
    })

    after(() => {
      userFoundStub.restore()
    })

    it('47. Falha - admin- email já registrado na rede', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/admin')
      .set('authorization', adminToken)
      .send(createAdminRequest)


      expect(chaiHttpResponse.status).to.be.equal(409);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Email address already used' });
    });
  });
})
