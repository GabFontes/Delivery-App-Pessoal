const readProducts = () => JSON.parse(localStorage.getItem('products'));

const setProduct = (product) => localStorage.setItem('products', JSON.stringify(product));

if (!readProducts()) {
  setProduct([]);
}

// Caso não exista Add new Product
const notExistProduct = (id, name, price, qtt) => {
  const result = readProducts();
  const product = { id, name, price, quantity: qtt };
  result.push(product);
  setProduct(result);
};

// Verifica existencia do produto
const verifyProductId = (id) => {
  const result = readProducts();
  const exist = result.some((prod) => prod.id === id);
  console.log(exist);
  return exist;
};

// Aumenta Quantidade
const addQuantProduct = (id) => {
  const result = readProducts();
  const update = result.map((prod) => {
    if (prod.id === id) {
      prod.quantity += 1;
      return prod;
    }
    return prod;
  });
  setProduct(update);
};

// reduz a quantidade do produto
const reduceQuantProduct = (id) => {
  const result = readProducts();
  const update = result.map((prod) => {
    console.log('entrou aqui', id);
    if (prod.id === id) {
      prod.quantity -= 1;
      return prod;
    }
    return prod;
  });
  setProduct(update);
};

export const addProduct = (id, name, price, qtt) => {
  // console.log(verifyProductId(id));
  if (!verifyProductId(id)) return notExistProduct(id, name, price, qtt);
  addQuantProduct(id);
};

export const reduceProduct = (id) => {
  // console.log(verifyProductId(id));
  reduceQuantProduct(id);
};

const replaceQuantProduct = (id, qtt) => {
  const result = readProducts();
  const update = result.map((prod) => {
    if (prod.id === id) {
      prod.quantity = qtt;
      return prod;
    }
    return prod;
  });
  setProduct(update);
};

export const inputProduct = (id, name, price, qtt) => {
  // console.log(verifyProductId(id));
  if (!verifyProductId(id)) return notExistProduct(id, name, price, qtt);
  replaceQuantProduct(id, qtt);
};
