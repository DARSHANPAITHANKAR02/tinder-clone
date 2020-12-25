import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://clone-tinderbackend.herokuapp.com',
});

export default instance;