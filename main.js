
// #ifndef VUE3
import {$http} from "@escook/request-miniprogram"
import Vue from 'vue'
import App from './App'
//引入store
import store from "store/store.js"
//引入mixins
import tabbar_mixins from "@/mixins/tabbar-badge.js"

uni.$http=$http
$http.baseUrl="https://api-hmugo-web.itheima.net"
//请求拦截
$http.beforeRequest = function (options) {
	if(options.url.indexOf('/my/')!== -1 ){
		options.header={
			Authorization:store.state.m_user.token,
		}
	}
  uni.showLoading({
    title: '数据加载中...',
  })
}

$http.afterRequest = function () {
  uni.hideLoading()
}
uni.$showMsg=function(title='数据请求失败!',duration=1500,){
	 uni.showToast({
	    title,
	    duration,
	    icon: 'none'
	  })
}
Vue.config.productionTip = false

App.mpType = 'app'
Vue.mixin(tabbar_mixins)
const app = new Vue({
    ...App,
	store
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif