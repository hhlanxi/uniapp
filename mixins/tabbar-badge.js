import {mapGetters} from "vuex"
export default{
	computed:{
		...mapGetters('m_cart',['total'])
	},methods:{
		setBadge(){
			uni.setTabBarBadge({
				index:2,
				text:this.total + ''
			})
		}
	},
	onShow: function() {
		this.setBadge()
	},
	watch:{
		total:{
			handler(newValue){
				this.setBadge()
			}
		}
	}
}