import axios, { InternalAxiosRequestConfig } from 'axios';

const baseAuthenticationService = axios.create({
    baseURL: 'http://localhost:8080/api/v1/security',
    withCredentials: false,
    headers: {
        Accept:
            'application/json',
            'Content-Type': 'application/json'
    }
});

baseAuthenticationService.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default baseAuthenticationService;