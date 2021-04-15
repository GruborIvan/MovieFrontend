import axios from 'axios'

const BASE_MOVIES_URL = 'http://localhost:8000/movies';
//const LOGIN_URL = 'http://localhost:8000/token';

export async function getMovies() {
    return await axios.get(BASE_MOVIES_URL).then(res => res.data);
}

export async function postMovie(movie) {
    return axios.post(BASE_MOVIES_URL, {
        data: movie,
    })
    .then((response) => {
        console.log(response)
    })
}