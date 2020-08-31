import axios from 'axios';

const KEY='AIzaSyBi5Ba8W8gQsJOqKujvSU2eRDGAkxO13m8';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snipset',
        maxResult:5,
        key:KEY
    }
});