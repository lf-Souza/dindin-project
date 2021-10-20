import serviceApi from '../../service/aulas'

export default {
    namespaced: true,
    state:{
        aulas: []
    },
    mutations:{
        SET_AULAS(state, payload){
            state.aulas = payload
        }
    },
    actions:{
        getAulas(context){
            return serviceApi.getAulas().then(res =>{
                context.commit('SET_AULAS', res.data.results)
            })
        }
    },
    getters:{
        listAulas(state){
            return state.aulas
        }
    }
}