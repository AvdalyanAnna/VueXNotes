import Vue from "vue";
import Vuex from "vuex"

import note from "./note";
import priority from "@/store/priority";
import error from "@/store/error";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        note,
        priority,
        error
    },
    state: {}
})