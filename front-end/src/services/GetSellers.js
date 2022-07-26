import axios from 'axios';

async function GetSellers(token) {
  try {
    const url = 'http://localhost:3001/seller';
    const resp = await axios.get(url, { headers: { authorization: token } });
    const { data } = resp;
    return data;
  } catch (error) {
    return error;
  }
}

export default GetSellers;
