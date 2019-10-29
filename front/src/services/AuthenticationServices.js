import Api from '@s/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

//    AuthenticationServices.register ({
//        email: 'demo@gmail.com',
//        password: '4352'
//    })
