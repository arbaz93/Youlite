import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '100'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_V3_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

export async function fetchFromAPI(url) {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}
