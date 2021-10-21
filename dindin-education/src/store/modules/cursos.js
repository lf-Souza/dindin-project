import serviceApi from '../../service/cursos'

export default {
    namespaced: true,
    state: {
      cursos:[]
    },
    mutations: {
      SET_CURSOS( state, payload){
        state.cursos = payload
      }
    },
    actions: {
      getCursos(context){
        return serviceApi.getCursos().then(res =>{
          context.commit('SET_CURSOS',res.data.results)
        })
      }
    },
    getters:{
      listCursos( state ){
        return state.cursos
      }
    },
    modules: {
    }
}