/* {[The file is published on the basis of YetiForce Public License 3.0 that can be found in the following directory: licenses/LicenseEN.txt or yetiforce.com]} */

import Vue from 'vue'
import Vuex from 'vuex'
import Objects from 'src/utilities/Objects.js'
import mutations from './mutations.js'
// modules
import Env from './Env'
import Users from './Users'
import Menu from './Menu'
import Url from './Url'
import Language from './Language'

Vue.use(Vuex)

export default function(/* { ssrContext } */) {
  const modules = {
    Env,
    Menu,
    Url,
    Users,
    Language
  }

  const Store = new Vuex.Store({
    modules,
    mutations: {
      [mutations.Global.update](state, payload) {
        state = Objects.mergeDeepReactive(state, payload)
      }
    }
  })
  return Store
}