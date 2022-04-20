import axios from 'axios';
import { API_TIMEOUT, baseURL } from '../../constants';

const TOKEN = '';

const ApiClient = axios.create({
    baseURL,
    timeout: API_TIMEOUT
});

ApiClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.get(TOKEN);

        if (!token) {
            console.log(`Application.token empty!`);
        }
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => Promise.reject(error)
);

ApiClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default ApiClient;
