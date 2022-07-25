import axios from 'axios';

async function PostAdminRegister(registerValues, token) {
  try {
    const url = 'http://localhost:3001/admin';
    const resp = await axios
      .post(url, registerValues, { headers: { authorization: token } });
    const { data } = resp;
    console.log('requisição feita');
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default PostAdminRegister;
