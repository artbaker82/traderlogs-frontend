import { createStore } from "vuex"
import sessionManager from "@/store/modules/session_manager"
import { auth } from "@/store/modules/auth"

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sessionManager,
    auth
  },
});
