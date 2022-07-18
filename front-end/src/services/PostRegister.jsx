import axios from 'axios';

async function PostRegister(registerValues) {
  try {
    const url = 'http://localhost:3001/register';
    const resp = await axios.post(url, registerValues);
    const { data } = resp;
    // console.log('resdata->', data);
    return data;
  } catch (err) {
    // console.log(err.response.data);
    return err;
  }
}

export default PostRegister;
