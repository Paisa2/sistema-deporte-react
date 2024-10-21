import API from '../conection/conection'

const AuthServices = {

    login: async (credentials) => {
        let response = {}
        await API.post('/user/login', credentials, { headers: {'Content-Type':'multipart/form-data'}} )
            .then(res => response = res)
            .catch(error => response = error.response)
        return response
    },
}

export default AuthServices