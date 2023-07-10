import Vue from "vue"
import Vuex from "vuex"
import cart from "./cart.js"
import moduleUser from "./user.js"
Vue.use(Vuex)


const store =new Vuex.Store({
	modules:{
		'm_cart':cart,
		'm_user': moduleUser
	}
})

export default store;