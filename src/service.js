import axios from 'axios';

export default async function fetchPhoto(q, page=1, perPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '37710226-2a3ec1a61ca81a1ed994291d3';
  const params = new URLSearchParams({
    key: API_KEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: page,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}