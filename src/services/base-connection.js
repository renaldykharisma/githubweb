import Axios from 'axios';

const axiosInstance =  Axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000
});

export default axiosInstance;