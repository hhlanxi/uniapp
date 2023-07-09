import Vue from "vue"
import Vuex from "vuex"
import cart from "./cart.js"
Vue.use(Vuex)


const store =new Vuex.Store({
	modules:{
		m_cart:cart
	}
})

export default store;