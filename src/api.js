import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.luova.io/polliato/api/v1/' // production
    // baseURL: 'http://localhost:8000/api/v1/'
})

export default api