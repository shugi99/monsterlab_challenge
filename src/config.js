// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
};
