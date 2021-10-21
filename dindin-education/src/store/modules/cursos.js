import serviceApi from '../../service/cursos'

export default {
    namespaced: true,
    state: {
      cursos:[],
      cursoDetalhes: []
    },
    mutations: {
      SET_CURSOS( state, payload){
        state.cursos = payload
      },
      SET_DETALHES_CURSO(state, payload){
        state.cursoDetalhes = payload
      }
    },
    actions: {
      getCursos(context){
        return serviceApi.getCursos().then(res =>{
          context.commit('SET_CURSOS',res.data)
        })
      },
      getCursoById(context, id){
        return serviceApi.getCursoById(id).then(res =>{
          context.commit('SET_DETALHES_CURSO',res.data)
        })
      }
    },
    getters:{
      listCursos( state ){
        return state.cursos
      },
      listDetalhesCurso(state){
        return state.cursoDetalhes
      }
    },
    modules: {
    }
}