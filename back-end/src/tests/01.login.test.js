const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { User } = require('../database/models');

chai.use(chaiHttp);

const { expect } = chai;

describe('ROTA: POST/login', () => {
  describe('SUCESSO - É possível logar', () => {
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

    it('1. Sucesso - Usuário existe', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
        password: '$#zebirita#$'
      })


      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.have.property('user');
      expect(chaiHttpResponse.body.user).to.have.property('name');
      expect(chaiHttpResponse.body.user).to.have.property('email');
      expect(chaiHttpResponse.body.user).to.have.property('password');
      expect(chaiHttpResponse.body.user).to.have.property('role');
      expect(chaiHttpResponse.body).to.have.property('token');
    });
  });

  describe('FALHAS - na Requisição - não é possível logar', () => {
    let chaiHttpResponse;

    before(async () => {
      sinon.stub(User, "findOne").resolves(null);
    })

    after(() => {
      (User.findOne).restore();
    })

    it('2. Falha - requisição sem email', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        password: '$#zebirita#$'
      })

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).not.to.have.property('user');
      expect(chaiHttpResponse.body).not.to.have.property('token');
      expect(chaiHttpResponse.body).to.deep.equal({ message : '"email" is required"' });
    });

    it('3. Falha - email inválido (regex)', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'zebirita',
        password: '$#zebirita#$'
      })

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).not.to.have.property('user');
      expect(chaiHttpResponse.body).not.to.have.property('token');
      expect(chaiHttpResponse.body).to.deep.equal({ message : '"email" must be a valid email' });
    });

    it('4. Falha - requisição sem senha', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
      })

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).not.to.have.property('user');
      expect(chaiHttpResponse.body).not.to.have.property('token');
      expect(chaiHttpResponse.body).to.deep.equal({ message : '"password" is required' });
    });
    
    it('5. Falha - senha menor que 6 caracteres', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
        password: '123'
      })

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).not.to.have.property('user');
      expect(chaiHttpResponse.body).not.to.have.property('token');
      expect(chaiHttpResponse.body).to.deep.equal({ message : '"password" length must be 6 characters long' });
    });

    it('6. Falha - email inexistente', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'zebita@email.com',
        password: '1234566'
      })
  
      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).not.to.have.property('user');
      expect(chaiHttpResponse.body).not.to.have.property('token');
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Could not found a user with this email' });
    });
  });

  


  describe('FALHA - Senha Incorreta', () => {
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

    it('7. Falha - Senha incorreta', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
        password: '1234566'
      })
  
      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).not.to.have.property('user');
      expect(chaiHttpResponse.body).not.to.have.property('token');
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Incorrect email/password combination' });
    });
  })
})
