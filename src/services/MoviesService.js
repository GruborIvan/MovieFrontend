import axiosClient from "./BaseApiService";

const ENDPOINTS = {
  MOVIES: "/movies",
  GENRES: "/genres",
  VISITS: "/visits",
};

const getMovies = async ({payload}) => {
  return await axiosClient.get(ENDPOINTS.MOVIES, { params: payload});
};

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

const movieService = {
  getMovies,
  postMovies,
  getGenres,
  updateMovieDetailsVisit,
  getSingleMovie,
};

export default movieService;