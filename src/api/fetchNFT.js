import axios from 'axios';

export async function fetchNft(url, params = {}) {
  try {
    const resp = await axios.get(url, { params });
    if (resp.status !== 200) {
      throw new Error();
    }
    return resp;
  } catch (err) {
    console.log(err);
  }
}
