const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { Sale, SaleProduct } = require('../database/models');
const {  CreateSaleRequest,
  saleCreatedResponse,
  CreateSaleResponse } = require('./mocks/sales.mock');
const { sucessfullToken, failedToken } = require('./mocks/token.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: POST/sales', () => {
  describe('SUCESSO - É possível criar uma nova venda', () => {
   
    let chaiHttpResponse;
    let saleCreatedStub;
    let saleProductCreatedStub;
    let SaleFoundByPkStub;

    before(async () => {
      saleCreatedStub = sinon.stub(Sale, "create").resolves(saleCreatedResponse);
      saleProductCreatedStub = sinon.stub(SaleProduct, "create").resolves({ok: 'ok'});
      SaleFoundByPkStub = sinon.stub(Sale, "findByPk").resolves(CreateSaleResponse); 
    })

    after(() => {
      saleCreatedStub.restore()
      saleProductCreatedStub.restore();
      SaleFoundByPkStub.restore();
    })

    it('19. Sucesso - É possível criar uma nova venda', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/sales')
      .set('authorization', sucessfullToken)
      .send(CreateSaleRequest)


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

describe('ROTA: POST/sales', () => {
  describe('FALHA - token - não é possível criar uma nova venda', () => {
   
    let chaiHttpResponse;
    let saleCreatedStub;
    let saleProductCreatedStub;
    let SaleFoundByPkStub;

    before(async () => {
      saleCreatedStub = sinon.stub(Sale, "create").resolves(saleCreatedResponse);
      saleProductCreatedStub = sinon.stub(SaleProduct, "create").resolves({ok: 'ok'});
      SaleFoundByPkStub = sinon.stub(Sale, "findByPk").resolves(CreateSaleResponse); 
    })

    after(() => {
      saleCreatedStub.restore()
      saleProductCreatedStub.restore();
      SaleFoundByPkStub.restore();
    })

    it('20. FALHA - não é possível criar uma nova venda sem token', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/sales')
      .send(CreateSaleRequest)

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Token not found' });
    });

    it('21. FALHA - não é possível criar uma nova venda com token inválido', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/sales')
      .set('authorization', failedToken)
      .send(CreateSaleRequest)

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Expired or invalid token' });
    });
  });

  describe('FALHA - token - não é possível criar uma nova venda', () => {
   
    let chaiHttpResponse;
    let saleCreatedStub;
    let saleProductCreatedStub;
    let SaleFoundByPkStub;

    before(async () => {
      saleCreatedStub = sinon.stub(Sale, "create").resolves(saleCreatedResponse);
      saleProductCreatedStub = sinon.stub(SaleProduct, "create").resolves({ok: 'ok'});
      SaleFoundByPkStub = sinon.stub(Sale, "findByPk").resolves(null); 
    })

    after(() => {
      saleCreatedStub.restore()
      saleProductCreatedStub.restore();
      SaleFoundByPkStub.restore();
    })

    it('22. FALHA - não é possível criar uma nova venda - erro no id', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/sales')
      .set('authorization', sucessfullToken)
      .send(CreateSaleRequest)

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Could not found a sale with this id' });
    });
  });
});


