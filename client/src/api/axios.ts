import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // Replace this with your backend URL
});

export default instance;
