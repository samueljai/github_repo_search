import axios from 'axios'

const BASE_URL = 'https://api.github.com'

export const getRepoResults = async (value) => {
  const { data } = await axios.get(`${BASE_URL}/search/repositories?q=${value}`);
  return data.items;
}