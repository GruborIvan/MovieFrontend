import axiosClient from "./BaseApiService";

const ENDPOINTS = {
  MOVIES: "/movies",
  GENRES: "/genres",
  VISITS: "/visits",
  MOVIE_LIST: "/movielist",
  POPULAR: "/movies/popular",
  ELASTIC_SEARCH: "/movies/elasticsearch",
};

const getMovies = async ({payload}) => {
  return await axiosClient.get(ENDPOINTS.MOVIES, { params: payload});
};

const searchWithElastic = async (payload) => {
  const response = await axiosClient.get(ENDPOINTS.ELASTIC_SEARCH,{params : payload})
  return response.data
}

const getPopularMovies = async() => {
  const response = await axiosClient.get(ENDPOINTS.POPULAR);
  return response.data.slice(0,4)
}

const getMyMovies = async () => {
  return await axiosClient.get(ENDPOINTS.MOVIE_LIST)
}

const getSingleMovie = async ({data}) => {
  return await axiosClient.get(`${ENDPOINTS.MOVIES}/${data}`)
}

const getGenres = async () => {
  return await axiosClient.get(ENDPOINTS.GENRES,{});
}

const postMovies = async (movieToAdd) => {
  await axiosClient.post(ENDPOINTS.MOVIES, movieToAdd, {
    headers : {
      'Content-Type' : "multipart/form-data"
    }
  })
};

const updateMovieDetailsVisit = async (data) => {
  await axiosClient.post(ENDPOINTS.VISITS,data);
};

const addMovieToWatchList = async (payload) => {
  await axiosClient.post(ENDPOINTS.MOVIE_LIST,payload)
}

const removeMovieFromWatchlist = async (payload) => {
  await axiosClient.delete(`${ENDPOINTS.MOVIE_LIST}/${payload}`)
}

const setWatched = async ({payload}) => {
  await axiosClient.put(`${ENDPOINTS.MOVIE_LIST}/${payload.movie}`,payload)
}

const movieService = {
  getMovies,
  getMyMovies,
  postMovies,
  getGenres,
  updateMovieDetailsVisit,
  getSingleMovie,
  addMovieToWatchList,
  removeMovieFromWatchlist,
  setWatched,
  getPopularMovies,
  searchWithElastic,
};

export default movieService;