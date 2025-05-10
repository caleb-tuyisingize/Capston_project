

import axios from 'axios';


// const apis = axios.create({
//     baseURL : "http://localhost:3004/API/student/",
// });

const apis2=axios.create({
    baseURL:"http://localhost:3004/api/courses"
})

// const fetched = () => apis.get('/');
// export default fetched;

const fetched2=()=>apis2.get('/')
export default fetched2;