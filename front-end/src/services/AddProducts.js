export const readProducts = () => JSON.parse(localStorage.getItem('products'));

export const setProduct = (product) => localStorage
  .setItem('products', JSON.stringify(product));

if (!readProducts()) {
  setProduct([]);
}

const removeProductsWithoutQtt = () => {
  const results = readProducts();
  const newResults = results.filter((prod) => prod.quantity !== 0);
  setProduct(newResults);
};

// Caso não exista Add new Product
const notExistProduct = (id, name, price, qtt) => {
  const result = readProducts();
  const product = {
    id,
    name,
    unityPrice: price,
    quantity: qtt,
    subTotal: Number(qtt * +price).toFixed(2) };
  result.push(product);
  setProduct(result);
  removeProductsWithoutQtt();
};

// Verifica existencia do produto
const verifyProductId = (id) => {
  const result = readProducts();
  const exist = result.some((prod) => prod.id === id);
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
  }).map((prod) => ({
    ...prod,
    subTotal: Number(prod.quantity * +prod.unityPrice).toFixed(2),
  }));
  setProduct(update);
  removeProductsWithoutQtt();
};

// reduz a quantidade do produto
const reduceQuantProduct = (id) => {
  const result = readProducts();
  const update = result.map((prod) => {
    if (prod.id === id) {
      prod.quantity -= 1;
      return prod;
    }
    return prod;
  }).map((prod) => ({
    ...prod,
    subTotal: Number(prod.quantity * +prod.unityPrice).toFixed(2),
  }));
  setProduct(update);
  removeProductsWithoutQtt();
};

export const addProduct = (id, name, price, qtt) => {
  // console.log(verifyProductId(id));
  if (!verifyProductId(id)) return notExistProduct(id, name, price, qtt);
  addQuantProduct(id);
};

export const reduceProduct = (id) => {
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
  }).map((prod) => ({
    ...prod,
    subTotal: Number(prod.quantity * +prod.unityPrice).toFixed(2),
  }));
  setProduct(update);
};

export const inputProduct = (id, name, price, qtt) => {
  // console.log(verifyProductId(id));
  if (!verifyProductId(id)) return notExistProduct(id, name, price, qtt);
  replaceQuantProduct(id, qtt);
  removeProductsWithoutQtt();
};
