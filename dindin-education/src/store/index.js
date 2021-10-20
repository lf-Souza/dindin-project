import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import cursos from './modules/cursos'
import aulas from './modules/aulas'

export default new Vuex.Store({
    modules:{
        cursos,
        aulas
    }
})
