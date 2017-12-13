/**
 * 整合接口
 */

import axios from 'axios'
import { host, delData } from './config'
import { myUrlData } from './my'
import { indexUrlData } from './index'
import { shopUrlData } from './shop'
import weui from 'weui.js'

// 接口地址集合地址
const urlData = {
    // 测试图文接口
    tuWen: '/tuwen',
    video: '/video',
    ...myUrlData,
    ...indexUrlData,
    ...shopUrlData
}

// 接口方法封装
export function getPostData(name, m) {
    let url = host + urlData[name];
    var loading = weui.loading('加载中……', {
        className: 'custom-classname'
    });
    return delData(m).then(data => {
        return axios.post(url, data).then(r => {
            loading.hide(function() {
                console.log('`loading` has been hidden');
            });
            return Promise.resolve(r.data);
        })
    })
}