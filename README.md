# 全名养猪

以下资料供参考学习（有的网址访问延迟需要穿墙）：

Vue官网：[https://cn.vuejs.org](https://cn.vuejs.org)

VueRouter中文官网：[https://router.vuejs.org/zh-cn/](https://router.vuejs.org/zh-cn/)

Vuex中文官网：[https://vuex.vuejs.org/zh-cn/](https://vuex.vuejs.org/zh-cn/)

Stylus中文版参考文档：[http://www.zhangxinxu.com/jq/stylus/](http://www.zhangxinxu.com/jq/stylus/)

Mui官网：[http://dev.dcloud.net.cn/mui/](http://dev.dcloud.net.cn/mui/)

Axios文档：[https://www.kancloud.cn/yunye/axios/234845](https://www.kancloud.cn/yunye/axios/234845)

HBuilder文档：[http://www.dcloud.io/runtime.html](http://www.dcloud.io/runtime.html)


### 前端技术栈
* [x] Node（服务器）
* [x] Vue（MVVM框架）
* [x] VueRouter （搭建组件间的路由跳转）
* [x] Vuex （全局引用的变量技术）
* [x] Babel （编译Es6）
* [x] Webpack (打包)
* [x] Stylus（编译CSS的预处理语言）
* [x] Mui（UI框架）
* [x] Axios（基于 promise 的 HTTP 库）
* [x] HBuilder（Native.js调用手机原生Native以及打包APP）

## 

Node安装：[http://www.runoob.com/nodejs/nodejs-install-setup.html](http://www.runoob.com/nodejs/nodejs-install-setup.html)

淘宝镜像：[https://npm.taobao.org/](https://npm.taobao.org/)

``` bash
# 安装package.json依赖如无法穿墙可以去切淘宝镜像
npm install

# 编译运行项目，启动8080端口服务器，即时编译项目
npm run dev

# 项目打包
npm run build

```



### 工程目录
``` bash
│
├── README.md                           <=  项目介绍
├── app                                 <=  开发目录
│   ├── dist                            <=  编译打包
│   ├── build                           <=  webpack编译配置
│   ├── config                          <=  项目配置
│   ├── node_modules                    <=  安装的依赖
│   ├── src                             <=  项目源代码
│   │   ├── api                         <=  接口层
│   │   ├── common                      <=  资源层
│   │   │   ├── assets                  <=  图片资源
│   │   │   ├── stylus                  <=  公共色系尺寸定义
│   │   ├── components                  <=  组件层
│   │   ├── router                      <=  Vue 路由相关
│   │   ├── store                       <=  Vuex
│   │   ├── views                       <=  视图层
│   ├── static                          <=  静态资源
├── package.json                        <=  相关依赖
├── index.html                          <=  入口文件