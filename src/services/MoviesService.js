import axiosClient from "./BaseApiService";

const ENDPOINTS = {
  MOVIES: "/movies",
  GENRES: "/genres",
};

const getMovies = async ({payload}) => {
  return await axiosClient.get(ENDPOINTS.MOVIES, { params: { 'page' : payload }});
};

const getFilteredMovies = async ({payload}) => {
  return await axiosClient.get(ENDPOINTS.MOVIES,{ params: { 'title': payload }});
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

const movieService = {
  getMovies,
  postMovies,
  getGenres,
  getFilteredMovies,
};

export default movieService;