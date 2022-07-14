import axios from 'axios';

async function PostLogin(loginValues) {
  try {
    const url = 'http://localhost:3001/user/login';
    const resp = await axios.post(url, loginValues);
    const data = await resp.data;
    // console.log('resdata->', data);
    return data;
  } catch (err) {
    // console.log(err.response.data);
    return err;
  }
}

export default PostLogin;
