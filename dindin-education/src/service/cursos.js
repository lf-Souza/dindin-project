import api from './api'

export default{

    getCursos(){
        return api.get('/cursos').then(res => {
            return res
        }).catch(error => {
            return error
        })
    },
    getCursoById(id){
        return api.get(`/cursos/${id}`).then(res=>{
            return res
        }).catch(error =>{
            return error;
        })
    }

}