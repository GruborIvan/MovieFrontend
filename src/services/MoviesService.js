import axiosClient from "./BaseApiService";

const ENDPOINTS = {
  MOVIES: "/movies",
};

const getMovies = async ({payload}) => {
  return await axiosClient.get(ENDPOINTS.MOVIES, { params: { 'page' : payload }});
};

const postMovies = async (movieToAdd) => {
  console.log(JSON.stringify(movieToAdd));
  await axiosClient
    .post(ENDPOINTS.MOVIES, movieToAdd)
    .then((response) => console.log(response));
};

const movieService = {
  getMovies,
  postMovies,
};

export default movieService;