import ApiServices from '../crud.service'
import { setMessage } from '../../store/messageSlice'
import store from '../../store'


export class UserCrud {

    async getUsers(filters={}) {
        const data = { users: [], pagitation: {}}
        const response = await ApiServices.getUsers(filters)
        if(response.status === 200) {
            data.users = response.data.data
            data.pagitation = response.data.pagitation
        } else {
            store.dispatch(setMessage({
                global: true,
                severity: 'error',
                status: response.status,
            }))
        }
        return data
    }

    async create(data, onSuccess, onFailed=()=>{}) {
        for (const key in data) {
            if(typeof data[key] === 'string') data[key] = data[key].trim()
        }
        data.activo = data.activo ? 1 : 0
        const response = await ApiServices.createUser(data);
        if(response.status === 201) {
            onSuccess()
            store.dispatch(setMessage({
                global: true,
                severity: 'success',
                title: 'El usuario fue creado exitosamente'
            }))
        } else {
            const errors = response.data.errors
            if(errors && Object.keys(errors).length > 0) {
                onFailed(errors)
            } else {
                store.dispatch(setMessage({
                    global: true,
                    severity: 'error',
                    status: response.status,
                }))
            }
            console.log(response)
        }
    }

    async update(data, id, onSuccess, onFailed=()=>{}) {
        for (const key in data) {
            if(typeof data[key] === 'string') data[key] = data[key].trim()
        }
        data.activo = data.activo ? 1 : 0
        const response = await ApiServices.updateUser(data, id);
        if(response.status === 200) {
            onSuccess()
            store.dispatch(setMessage({
                global: true,
                severity: 'success',
                title: 'La información del usuario se actualizó exitosamente'
            }))
        } else {
            const errors = response.data.errors
            if(errors && Object.keys(errors).length > 0) {
                onFailed(errors)
            } else {
                store.dispatch(setMessage({
                    global: true,
                    severity: 'error',
                    status: response.status,
                }))
            }
            console.log(response)
        }
    }

    async delete(id, onSuccess, onFailed=()=>{}) {
        const response = await ApiServices.deleteUser(id) 
            if(response.status === 204) {
                onSuccess()
                store.dispatch(setMessage({
                    global: true,
                    severity: 'success',
                    title: 'El usuario fue eliminado exitosamente'
                }))
            } else {
                onFailed()
                store.dispatch(setMessage({
                    global: true,
                    severity: 'error',
                    status: response.status,
                    title: response.data.message
                }))
                console.log(response)
            }  
    }

    async assignUserRoles(data, onSuccess) {
        const response = await ApiServices.assignRoles(data)
        if(response.status === 200) {
            onSuccess()
            store.dispatch(setMessage({
                global: true,
                severity: 'success',
                title: response.data.message
            }))
        } else {
            store.dispatch(setMessage({
                global: true,
                severity: 'error',
                status: response.status,
            }))
            console.log(response)
        }
    }

}