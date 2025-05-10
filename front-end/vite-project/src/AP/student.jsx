

import axios from 'axios';


const apis = axios.create({
    baseURL : "http://localhost:3004/API/student/",
});

const fetched = () => apis.get('/');
export default fetched;