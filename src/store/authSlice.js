import { createSlice } from "@reduxjs/toolkit"
import AuthService from '../services/auth.service'
import CrudServices from "../services/crud.service"
import { setMessage } from './messageSlice'




const token = localStorage.getItem('user-p')

const initialState = token ?
    {
        data: JSON.parse(token),
        isLogged: true,
        userRoles: {},
    } :
    {
        data: null,
        isLogged: false,
        userRoles: {},
    }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload.data
            state.isLogged = true
        },
        removeUser: (state) => {
            state.data = null
            state.isLogged = false
            state.userRoles = {}
        },
        setUserRoles: (state, action) => {
            state.userRoles = action.payload
        }
    },
})


export const login = (credentials) => async (dispatch) => {
	const response = await AuthService.login(credentials)
	if(response.status === 200) {
		dispatch(setUser({ data: response.data }))
        localStorage.setItem('user-p', JSON.stringify(response.data))
		return true
	} else {
		console.log(response)
		dispatch(setMessage(response.data.message))
		return false
	}
}

export const logout = () => async (dispatch) => {
    dispatch(removeUser())
    localStorage.removeItem('user-p')
}

export const getUserRoles = () => async (dispatch) => {
	const response = await CrudServices.getUserRoles()
        if(response.status === 200) {
            let roles = {}
            response.data.userRoles.forEach(rol => {
				// Transforma el rol en formato PascalCase
				rol = rol.replaceAll('_', ' ')
					.replaceAll('-', ' ')
					.replaceAll(
							/\w+/g, 
							function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase()}
						)
					.replaceAll(' ', '')
                roles[rol] = true
            });
			roles.init = true
			dispatch(setUserRoles(roles))
        }
}

export const { setUser, removeUser, setUserRoles } = authSlice.actions
export default authSlice.reducer