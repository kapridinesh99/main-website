import axios from 'axios';

const token = localStorage.getItem('rv_token') || '';

export const resourceService = axios.create({
    baseURL: process.env.REACT_APP_RESOURCE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
});

export const authService = axios.create({
    baseURL: process.env.REACT_APP_RESOURCE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
});