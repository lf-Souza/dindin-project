import api from './api'

export default{

    getCursos(){
        debugger
        return api.get('/character').then(res => {
            debugger
            return res
        }).catch(error => {
            debugger
            return error
        })
    }

}