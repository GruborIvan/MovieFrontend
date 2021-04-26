import axiosClient from "./BaseApiService";

const ENDPOINTS = {
  MOVIES: "/movies",
  GENRES: "/genres",
  VISITS: "/visits",
};

const getMovies = async ({payload}) => {
  return await axiosClient.get(ENDPOINTS.MOVIES, { params: payload});
};

const getSingleMovie = async ({movieId}) => {
  const response = await axiosClient.get(ENDPOINTS.MOVIES + '/' + movieId)
  console.log(response.data)
}

const getGenres = async () => {
  return await axiosClient.get(ENDPOINTS.GENRES,{});
}

const postMovies = async (movieToAdd) => {
  console.log(JSON.stringify(movieToAdd));
  await axiosClient
    .post(ENDPOINTS.MOVIES, movieToAdd)
    .then((response) => console.log(response));
};

const updateMovieDetailsVisit = async (movieId) => {
  await axiosClient.post(ENDPOINTS.VISITS,movieId);
};

const movieService = {
  getMovies,
  postMovies,
  getGenres,
  updateMovieDetailsVisit,
  getSingleMovie,
};

export default movieService;