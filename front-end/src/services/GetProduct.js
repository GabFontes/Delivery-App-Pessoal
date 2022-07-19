import axios from 'axios';

async function GetProduct(token) {
  try {
    const url = 'http://localhost:3001/products';
    const resp = await axios.get(url, { headers: { authorization: token } });
    const { data } = resp;
    return data;
  } catch (error) {
    return error;
  }
}

export default GetProduct;
