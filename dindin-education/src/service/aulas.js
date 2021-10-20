import api from './api'

export default {
    getAulas() {
        return api.get('/episode').then(res => {
            return res
        }).catch(error => {
            return error
        })
    }
}