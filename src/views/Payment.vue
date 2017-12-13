<template>
<div>
    <Goback :navtitle = "navtitle"></Goback>
    <button class="top">银联支付</button>
    <form id = "pay_form" @submit.prevent="submit" action="https://gateway.test.95516.com/gateway/api/frontTransReq.do" method="post">
       <div v-html="content"></div>
    </form>
</div>
</template>
<script>
  import Vue from 'vue'
  import Axios from 'axios'
  import qs from 'qs';
  import router from '@/router'
  import Goback from '../components/topnav/Gobacknav'
  
  const instance = Axios.create({
    baseURL:"http://192.168.0.106:8080/RhSys/unionpay",
    timeout:1000,
    headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
  });

export default {
  name: 'hello',
    components: {
      Goback
    },
    data() {
      return {
        navtitle: '返回',   // 导航标题
        content:'',
      }
    },
    activated () {
        let params={
          merId: 777290058110048,
          txnAmt: 1000
        }
        instance(   {
            method:'post',
            data:qs.stringify(params)
        }).then((resp) => {
                // handleSuccess(resp, callback, errorBack);
                console.log(resp);
                this.content = resp.data;
            },
            (error) => {
                handleError(errorBack);
            }
        );
        // va r url ='http://192.168.0.106:8080/RhSys/unionpay';
        // var params={
        //   merId: 777290058110048,
        //   txnAmt: 1000
        // }
        // Axios.post(url,params).then(res => {
        //     console.log(res)
        //     this.content = res;
        // }).catch(function (error) {

        // });
        // 
    },
    updated () {
      document.all.pay_form.submit();
    }
}
</script>
<style lang="stylus" scoped>
    .top
        margin-top 80px
</style>
