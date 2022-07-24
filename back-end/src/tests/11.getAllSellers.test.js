const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { User } = require('../database/models');
const sellerGetAllResponse = require('./mocks/seller.mock');
const { userSucessToken, failedToken } = require('./mocks/token.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: get/seller', () => {
  describe('SUCESSO - É possível fazer a requisição com o token e é recebido os dados corretamente', () => {
   
    let chaiHttpResponse;
    let sellerStub;

    before(async () => {
      sellerStub = sinon.stub(User, "findAll").resolves(sellerGetAllResponse);
    })

    after(() => {
      sellerStub.restore()
    })

    it('16. Sucesso - É possível fazer a requisição', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/seller')
      .set('authorization', userSucessToken)


      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.an('array');
      expect(chaiHttpResponse.body).to.deep.equal(sellerGetAllResponse);
    });
  });
});

describe('FALHA(token) - na Requisição - não é possível fazer a requisição', () => {
  let chaiHttpResponse;

  it('17. Falha - Token não válido', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/seller')
    .set('authorization', failedToken);

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Expired or invalid token' });
  });

  it('18. Falha - Requisição sem token', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/seller');

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Token not found' });
  });
});

describe('FALHA - Erro interno 500', () => {
  let chaiHttpResponse;
  let sellerStub;

  before(async () => {
    sellerStub = sinon.stub(User, "findAll").throws('error')
  })

  after(() => {
    sellerStub.restore()
  })

  it('19. Falha - 500 - Erro interno', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/seller')
    .set('authorization', userSucessToken);

    expect(chaiHttpResponse.status).to.be.equal(500);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'internal error' });
  });

});
