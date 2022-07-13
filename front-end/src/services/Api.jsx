import axios from 'axios';

export async function PostLogin(loginValues) {
  try {
    const url = 'http://localhost:0000/login';
    const resp = await axios.post(url, loginValues);
    const data = await resp.data;
    console.log(data);
    return data;
  } catch(err) {
    console.log(err.response.data);
    return err.response.data;
  }
}
