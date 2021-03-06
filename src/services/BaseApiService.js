import axios from 'axios'

const BASE_URL = 'http://localhost:8000';

export default axios.create({
    baseURL: BASE_URL,
    headers: { 
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'content-type': 'application/json'
    }
})

