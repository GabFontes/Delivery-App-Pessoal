const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { User } = require('../database/models');

chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: POST/login', () => {
  describe('Sucesso - É possível logar', () => {
    const sinonStub = {
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '1c37466c159755ce1fa181bd247cb925', // md5('$#zebirita#$')
      role: 'customer',
    }
    let chaiHttpResponse;

    before(async () => {
      sinon.stub(User, "findOne").resolves(sinonStub);
    })

    after(() => {
      (User.findOne).restore();
    })

    it('1. SUCESSO - Usuário existe', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
        password: '$#zebirita#$'
      })


      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body.user).to.have.property('name');
      expect(chaiHttpResponse.body.user).to.have.property('email');
      expect(chaiHttpResponse.body.user).to.have.property('password');
      expect(chaiHttpResponse.body.user).to.have.property('role');
      expect(chaiHttpResponse.body).to.have.property('token');
    });
  });
})
