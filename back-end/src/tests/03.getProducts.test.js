const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { Product } = require('../database/models');
const productsResponse = require('./mocks/product.mock');
const { sucessfullToken, failedToken } = require('./mocks/token.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: get/products', () => {
  describe('SUCESSO - É possível fazer a requisição com o token e é recebido os dados corretamente', () => {
   
    let chaiHttpResponse;
    let productStub;

    before(async () => {
      productStub = sinon.stub(Product, "findAll").resolves(productsResponse);
    })

    after(() => {
      productStub.restore()
    })

    it('16. Sucesso - É possível fazer a requisição', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/products')
      .set('authorization', sucessfullToken)


      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.an('array');
      expect(chaiHttpResponse.body).to.deep.equal(productsResponse);
    });
  });
});

describe('FALHA(token) - na Requisição - não é possível fazer a requisição', () => {
  let chaiHttpResponse;
  let productStub;

  before(async () => {
    productStub = sinon.stub(Product, "findAll").resolves(productsResponse);
  })

  after(() => {
    productStub.restore();
  })

  it('17. Falha - Token não válido', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/products')
    .set('authorization', failedToken);

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Expired or invalid token' });
  });

  it('18. Falha - Requisição sem token', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .get('/products');

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Token not found' });
  });
});
