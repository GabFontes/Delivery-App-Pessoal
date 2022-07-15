const app = require('../api/app');
const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { User } = require('../database/models');

chai.use(chaiHttp);

const { expect } = chai;

const sinonStubCreated = {
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  password: '$#zebirita#$',
  role: 'customer',
}

const sinonStubReturn = {
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  password: '1c37466c159755ce1fa181bd247cb925',
  role: 'customer',
}

describe('ROTA: POST/register', () => {
  describe('SUCESSO - É possível criar um novo usuário', () => {
   
    let chaiHttpResponse;
    let userFoundStub;
    let userCreatedStub

    before(async () => {
      userFoundStub = sinon.stub(User, "findOne").resolves(null);
      userCreatedStub = sinon.stub(User, "create").resolves(sinonStubReturn);
    })

    after(() => {
      userFoundStub.restore()
      userCreatedStub.restore();
    })

    it('8. Sucesso - É possível criar o usuário', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/register')
      .send(sinonStubCreated)


      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.have.property('name');
      expect(chaiHttpResponse.body).to.have.property('email');
      expect(chaiHttpResponse.body).to.have.property('password');
      expect(chaiHttpResponse.body).to.have.property('role');
      expect(chaiHttpResponse.body).to.deep.equal(sinonStubReturn);
    });
  });
});

describe('FALHAS - na Requisição - não é possível criar um novo usuário', () => {
  let chaiHttpResponse;

  let userFoundStub;
  let userCreatedStub

  before(async () => {
    userFoundStub = sinon.stub(User, "findOne").resolves(sinonStubReturn);
    userCreatedStub = sinon.stub(User, "create").resolves(null);
  })

  after(() => {
    userFoundStub.restore();
    userCreatedStub.restore();
  })

  it('9. Falha - requisição sem email', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send({
      name: 'Cliente Zé Birita',
      password: '$#zebirita#$',
      role: 'customer',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"email" is required"' });
  });

  it('10. Falha - email inválido (regex)', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send({
      name: 'Cliente Zé Birita',
      email: 'zebirita',
      password: '$#zebirita#$',
      role: 'customer',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"email" must be a valid email' });
  });

  it('11. Falha - requisição sem senha', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send({
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      role: 'customer',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"password" is required' });
  });
  
  it('12. Falha - senha menor que 6 caracteres', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send({
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '123',
      role: 'customer',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"password" length must be 6 characters long' });
  });

  it('13. Falha - requisição sem nome', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send({
      email: 'zebirita@email.com',
      password: '$#zebirita#$',
      role: 'customer',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"name" is required' });
  });

  it('14. Falha - nome com menos de 12 caracteres', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send({
      name: 'Cliente',
      email: 'zebirita@email.com',
      password: '$#zebirita#$',
      role: 'customer',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"name" length must be 12 characters long' });
  });

  it('15. Falha - sem "role"', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send({
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '$#zebirita#$',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).not.to.have.property('user');
    expect(chaiHttpResponse.body).to.deep.equal({ message : '"role" is required' });
  });

  it('16. Falha - "role" diferente de administrador, seller ou customer', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/register')
    .send({
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '$#zebirita#$',
      role: 'dev',
    })

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.deep.equal({ message : 'Role needs to be an administrator, customer or seller' });
  });
});

describe('ROTA: POST/register', () => {
  describe('FALHA - não é possível criar um novo usuário', () => {
    
    let chaiHttpResponse;
    let userFoundStub;

    before(async () => {
      userFoundStub = sinon.stub(User, "findOne").resolves(sinonStubReturn);
    })

    after(() => {
      userFoundStub.restore()
    })

    it('17. Falha - email já registrado na rede', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/register')
      .send(sinonStubCreated)


      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.deep.equal({ message : 'Email address already used' });
    });
  });
})
