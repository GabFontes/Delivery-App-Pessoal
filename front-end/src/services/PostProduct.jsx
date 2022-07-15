import axios from 'axios';

async function PostProduct() {
  try {
    const url = 'http://localhost:3001/customer/products';
    const resp = await axios.get(url);
    const data = await resp.data;
    return data;
  } catch (error) {
    return error;
  }
}

export default PostProduct;
