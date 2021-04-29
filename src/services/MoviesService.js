import axiosClient from "./BaseApiService";

const ENDPOINTS = {
  MOVIES: "/movies",
  GENRES: "/genres",
  VISITS: "/visits",
  MOVIE_LIST: "/movielist"
};

const getMovies = async ({payload}) => {
  return await axiosClient.get(ENDPOINTS.MOVIES, { params: payload});
};

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
  await axiosClient
    .post(ENDPOINTS.MOVIES, movieToAdd)
    .then((response) => console.log(response));
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

const movieService = {
  getMovies,
  getMyMovies,
  postMovies,
  getGenres,
  updateMovieDetailsVisit,
  getSingleMovie,
  addMovieToWatchList,
  removeMovieFromWatchlist,
};

export default movieService;