import axios from 'axios';
<<<<<<< HEAD

const request = axios.create({
  // baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:3003/api' : 'http://localhost:3003/api', //请求接口地址
  baseURL: 'http://localhost:3003/api', //请求接口地址
  timeout: 3000,            //请求超时3秒就断开
  withCredentials: true     //toke跨域
})

=======
const request = axios.create({
    // baseURL:process.env.NODE_ENV==='production'?'':'http://localhost:3003/api',
    baseURL:'http://localhost:3003/api',
    withCredentials:true
})
>>>>>>> gr
export default request;