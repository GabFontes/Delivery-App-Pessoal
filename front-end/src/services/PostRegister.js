import axios from 'axios';

async function PostRegister(registerValues) {
  try {
    const url = 'http://localhost:3001/register';
    const resp = await axios.post(url, registerValues);
    const { data } = resp;
    return data;
  } catch (err) {
    return err;
  }
}

export default PostRegister;
