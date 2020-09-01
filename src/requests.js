const API_KEY = "7e1f17cca73a5325fe02abfc4fcd2049";

export default {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchScifiMovies: `discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWesternMovies: `discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimationMovies: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchMystreyMovies: `discover/movie?api_key=${API_KEY}&with_genres=9648`,
};
