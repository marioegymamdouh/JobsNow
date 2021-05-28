import axios from 'axios';

const jobsAxios = axios.create({
    baseURL: 'http://api.dataatwork.org/v1/'
});

export default jobsAxios;