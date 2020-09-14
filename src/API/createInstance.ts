import axios from 'axios';

const createInstance = axios.create({
    baseURL: ' https://www.nbrb.by/api/exrates/',
});

export default createInstance;
