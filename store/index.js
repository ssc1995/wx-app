import Vue from 'vue'
import Vuex from 'vuex'
import Login from './login'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
		Login,
  },
})

export default store