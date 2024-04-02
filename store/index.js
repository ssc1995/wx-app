import Vue from 'vue'
import Vuex from 'vuex'
import Login from './login'
import Common from './common'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
		Login,
		Common
  },
})

export default store