import axios from 'axios';
const SocialApi=axios.create({
    baseURL:'https://social-app-c1e37.firebaseio.com/',
    timeout:5000
})
export default SocialApi;