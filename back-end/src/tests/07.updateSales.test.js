const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { Sale } = require('../database/models');
const { CreateSaleResponse, UpdateSalesRequest, UpdateSalesResponse } = require('./mocks/sales.mock');
const { sucessfullToken, failedToken } = require('./mocks/token.mock');

chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: PATCH/sales/:id', () => {
  describe('SUCESSO -  É possível atualizar uma venda pelo saleID', () => {
   
    let chaiHttpResponse;
    let SaleFoundByPkStub;
    let updateSaleStub;

    before(async () => {
      SaleFoundByPkStub = sinon.stub(Sale, "findByPk").resolves(CreateSaleResponse); 
      updateSaleStub = sinon.stub(Sale, "update").resolves();

    })

    after(() => {
      SaleFoundByPkStub.restore();
      updateSaleStub.restore();
    })

    it('32. Sucesso - É possível atualizar uma venda pelo saleID', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .patch('/sales/1')
      .set('authorization', sucessfullToken)
      .send(UpdateSalesRequest)

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

describe('ROTA: PATCH/sales/:id', () => {
  describe('FALHA - token - não é possível atualizar a venda pelo saleID', () => {
   
    let chaiHttpResponse;

    it('33. FALHA - não é possível fazer a atualização sem token', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .patch('/sales/1')
      .send(UpdateSalesRequest);

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Token not found' });
    });

    it('34. FALHA - não é possível fazer a atualização com token invalido', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .patch('/sales/1')
      .set('authorization', failedToken)
      .send(UpdateSalesRequest);

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Expired or invalid token' });
    });
  });

  describe('FALHA - token - não é possível listar as vendas por saleID', () => {
   
    let chaiHttpResponse;
    let SaleFoundByPkStub;
    let updateSaleStub;

    before(async () => {
      SaleFoundByPkStub = sinon.stub(Sale, "findByPk").resolves(null);
      updateSaleStub = sinon.stub(Sale, "update").resolves();
    })

    after(() => {
      SaleFoundByPkStub.restore();
      updateSaleStub.restore();
    })

    it('35. FALHA - saleId não encontrado', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .patch('/sales/99')
      .set('authorization', sucessfullToken)
      .send(UpdateSalesRequest);

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Could not found a sale with this id' });
    });

  });
});


