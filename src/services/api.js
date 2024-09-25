import axios from 'axios';

const api = axios.create({
    // link da api utilizada
    baseURL:'https://api.github.com/',
});

export default api;