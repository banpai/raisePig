/**
 * 接口层的公共配置
 */

// 主域名
export const host = 'https://www.easy-mock.com/mock/5a24b4fb1b839f3936cd3db4/';

// 数据处理
export function delData(m){
    m.opined = 'iii';
    return Promise.resolve(m);
}