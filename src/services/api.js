import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: 'Bearer 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'
    }
});

export default api;
