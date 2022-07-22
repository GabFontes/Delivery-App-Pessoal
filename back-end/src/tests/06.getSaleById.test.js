const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { Sale } = require('../database/models');
const { CreateSaleResponse } = require('./mocks/sales.mock');
const { sucessfullToken, failedToken } = require('./mocks/token.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: GET/sales/:id', () => {
  describe('SUCESSO - É possível listar as vendas por saleId', () => {
   
    let chaiHttpResponse;
    let SaleFoundByPkStub;

    before(async () => {
      SaleFoundByPkStub = sinon.stub(Sale, "findByPk").resolves(CreateSaleResponse); 
    })

    after(() => {
      SaleFoundByPkStub.restore();
    })

    it('26. Sucesso - É possível listar as vendas por saleID', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales/1')
      .set('authorization', sucessfullToken)

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.have.property('id');
      expect(chaiHttpResponse.body).to.have.property('userId');
      expect(chaiHttpResponse.body).to.have.property('sellerId');
      expect(chaiHttpResponse.body).to.have.property('totalPrice');
      expect(chaiHttpResponse.body).to.have.property('deliveryAddress');
      expect(chaiHttpResponse.body).to.have.property('deliveryNumber');
      expect(chaiHttpResponse.body).to.have.property('saleDate');
      expect(chaiHttpResponse.body).to.have.property('status');
      expect(chaiHttpResponse.body).to.have.property('user');
      expect(chaiHttpResponse.body.user).to.have.property('id');
      expect(chaiHttpResponse.body.user).to.have.property('role');
      expect(chaiHttpResponse.body).to.have.property('products');
      expect(chaiHttpResponse.body.products).to.be.an('array');
     
    });
  });
});

describe('ROTA: GET/sales/:id', () => {
  describe('FALHA - token - não é possível listar as vendas por saleID', () => {
   
    let chaiHttpResponse;

    it('27. FALHA - não é possível fazer a requisição para as vendas sem token', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales/1');

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Token not found' });
    });

    it('28. FALHA - não é possível fazer a requisição para as vendas com token invalido', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales/1')
      .set('authorization', failedToken);

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Expired or invalid token' });
    });
  });

  describe('FALHA - token - não é possível listar as vendas por saleID', () => {
   
    let chaiHttpResponse;
    let SaleFoundByPkStub;

    before(async () => {
      SaleFoundByPkStub = sinon.stub(Sale, "findByPk").resolves(null); 
    })

    after(() => {
      SaleFoundByPkStub.restore();
    })

    it('29. FALHA - saleId não encontrado', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales/99')
      .set('authorization', sucessfullToken);

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Could not found a sale with this id' });
    });

  });
});


