const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { Sale } = require('../database/models');
const { getAllSalesByUserIdResponse } = require('./mocks/sales.mock');
const { sucessfullToken, failedToken } = require('./mocks/token.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: GET/sales', () => {
  describe('SUCESSO - É possível consultar todas as vendas pelo usuário', () => {
   
    let chaiHttpResponse;
    let SaleFoundAllStub;

    before(async () => {
      SaleFoundAllStub = sinon.stub(Sale, "findAll").resolves(getAllSalesByUserIdResponse); 
    })

    after(() => {
      SaleFoundAllStub.restore();
    })

    it('24. Sucesso - É possível consultar todas as vendas pelo usuário', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales')
      .set('authorization', sucessfullToken)


      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.an('array');

      expect(chaiHttpResponse.body[0]).to.have.property('id');
      expect(chaiHttpResponse.body[0]).to.have.property('userId');
      expect(chaiHttpResponse.body[0]).to.have.property('sellerId');
      expect(chaiHttpResponse.body[0]).to.have.property('totalPrice');
      expect(chaiHttpResponse.body[0]).to.have.property('deliveryAddress');
      expect(chaiHttpResponse.body[0]).to.have.property('deliveryNumber');
      expect(chaiHttpResponse.body[0]).to.have.property('saleDate');
      expect(chaiHttpResponse.body[0]).to.have.property('status');

      expect(chaiHttpResponse.body[1]).to.have.property('id');
      expect(chaiHttpResponse.body[1]).to.have.property('userId');
      expect(chaiHttpResponse.body[1]).to.have.property('sellerId');
      expect(chaiHttpResponse.body[1]).to.have.property('totalPrice');
      expect(chaiHttpResponse.body[1]).to.have.property('deliveryAddress');
      expect(chaiHttpResponse.body[1]).to.have.property('deliveryNumber');
      expect(chaiHttpResponse.body[1]).to.have.property('saleDate');
      expect(chaiHttpResponse.body[1]).to.have.property('status');
     
    });
  });
});

describe('ROTA: GET/sales', () => {
  describe('FALHA - token - não é possível fazer a requisição para as vendas', () => {
   
    let chaiHttpResponse;
    let SaleFoundAllStub;

    before(async () => {
      SaleFoundAllStub = sinon.stub(Sale, "findAll").throws('error'); 
    })

    after(() => {
      SaleFoundAllStub.restore();
    })

    it('25. FALHA - não é possível fazer a requisição para as vendas sem token', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales');

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Token not found' });
    });

    it('26. FALHA - não é possível fazer a requisição para as vendas com token invalido', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales')
      .set('authorization', failedToken);

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Expired or invalid token' });
    });

    it('27. FALHA - erro interno', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/sales')
      .set('authorization', sucessfullToken);

      expect(chaiHttpResponse.status).to.be.equal(500);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'internal error' });
    });
  });

});


