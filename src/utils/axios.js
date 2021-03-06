import axios from 'axios'
import store from '@/store'

//import { Indicator, MessageBox } from 'mint-ui'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
// Add a request interceptor
axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    Open()

    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function(response) {
    // Do something with response data
    Close()

    return response.data;
}, function(error) {
    Close()

    // Do something with response error
    return Promise.reject(error)
})

let count = 0

export function Open() {
    //Indicator.open()
    count++
}

export function Close() {
    if (--count <= 0) {
        //Indicator.close()
    }
}

export default axios