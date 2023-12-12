import axios, { InternalAxiosRequestConfig } from 'axios';
import User from "../../domain/model/User";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1/security',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default {
    async register(user: User) {
        const response = await apiClient.post('/register', user);
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userUuid', response.data.user.uuid);
    },
    async login(user: User) {
        const response = await apiClient.post('/login', user);
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userUuid', response.data.user.uuid);
    }
}