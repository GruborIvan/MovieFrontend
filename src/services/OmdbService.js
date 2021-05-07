import axios from 'axios'

const OMDB_API_KEY = 'f755f05f';
const BASE_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

const fetchMoviesFromOmdb = async (params) => {
    const response = await axios.get(BASE_URL,{ params : params })
    return response.data;
};

const filterGenres = (movieGenres, allGenres) => {

    let thisMovieGenres = []

                                                                        // eslint-disable-next-line
    const thisMovGnrs = movieGenres.reduce((genres,currentGenre) => {

        const genreTrimmed = currentGenre.split(' ').join('');
        allGenres.forEach(genre => {
            if (genre.genre_name === genreTrimmed) {
                thisMovieGenres.push(genre.id)
                return genre.id
            }
        });
        return []
    },[])

    return thisMovieGenres
};

const OmdbService = {
    fetchMoviesFromOmdb,
    filterGenres,
}

export default OmdbService;