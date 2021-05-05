import axios from 'axios'

const OMDB_API_KEY = 'f755f05f';
const BASE_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

const fetchMoviesFromOmdb = async (params) => {
    const response = await axios.get(BASE_URL,{ params : params })
    return response.data;
};

const filterGenres = (movieGenres, allGenres) => {
    
    let thisMovieGenres = []

    movieGenres.forEach(genreWithSpace => {
        const genre = genreWithSpace.split(' ').join('')
        
        allGenres.forEach(gen => {
            if (gen.genre_name === genre) {
                thisMovieGenres.push(gen.id)
            }
        })
    });

    console.log(thisMovieGenres)
    return thisMovieGenres
};

const OmdbService = {
    fetchMoviesFromOmdb,
    filterGenres,
}

export default OmdbService;