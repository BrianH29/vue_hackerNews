import axios from 'axios';
import bus from '@/utils/bus'

// 1. HTTP Request & Response 관련된 기본 설정
const instance = axios.create({
    baseURL : 'https://api.hnpwa.com/v0/',
})

instance.interceptors.request.use((config) =>{
    bus.$emit('start:spinner');
    return config;
},(error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    bus.$emit('end:spinner');
    return response;
},(error) => {
    return Promise.reject(error);
})

// 2. API 함수들을 정리
function fetchNewsList(){
    return instance.get(`news/1.json`);
}

function fetchJobsList(){
    return instance.get(`jobs/1.json`);
}

function fetchAskList(){
    return instance.get(`ask/1.json`)
}

function fetchUserInfo(username){
    return instance.get(`user/${username}.json`)
}

function fetchItemComment(id){
    return instance.get(`item/${id}.json`)

}

async function fetchList(pageName){
    try{
        return await instance.get(`${pageName}/1.json`)
    } catch(error){
        console.log(error);
    }
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemComment,
    fetchList,
}