import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'
import { getUserRoles } from '../store/authSlice'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { OverlayPanel } from 'primereact/overlaypanel'
import { Avatar } from 'primereact/avatar'

import CrudServices from '../services/crud.service'


const NavBar = ({ currentUser }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userRoles = useSelector(state => state.auth.userRoles)
    const [userInfo, setUserInfo] = useState({})
    const panelRef = useRef()

    const handleLogout = () => {
        dispatch(logout()).then(() => {
            if(panelRef.current) {
                panelRef.current.hide()
            }
            navigate('/')
        })
    }

    useEffect(() => {
        const loadUserInfo = async () => {
            const response = await CrudServices.getUsuario()
            if(response.status === 200) setUserInfo(response.data.user)
        }
        if(currentUser) {
            dispatch(getUserRoles())
            loadUserInfo()
        }
    }, [currentUser, dispatch])

    let items = [
        {
            label: '',
        },
    ]
    if(currentUser) {
        items.push({ label: 'inicio', command:()=>navigate("/") })
        if(userRoles.Administrador) {
            items = items.concat([
                { label: 'Usuarios', command:()=>navigate('/user')},
                { label: 'Personas', command:()=>navigate('/persona') },
            ])
        } else if(userRoles.jefeDeportes) {
            items = items.concat([
                {
                    label: 'Pagos',
                    items: [
                        { label:'pendientes', command:()=>navigate('')}
                    ]
                }
            ])
        }
    }

    return (

        <>
            <Menubar
                model={items}
                className='bg-light'
                end={currentUser ? <Avatar shape='circle' icon='pi pi-user' size='large' className='p-button-rounded' onClick={(e) => panelRef.current.toggle(e)}/>: null}
            />
            <OverlayPanel ref={panelRef} >
                {userInfo ? 
                    <div className='mb-4'>
                        <div><strong>Usuario:   </strong>{userInfo.apellidos}  {userInfo.nombres}</div>
                        <div><strong>Unidad:    </strong> {userInfo.unidad}</div>
                        <div><strong>Cargo:    </strong> {userInfo.userRoles}</div>
                    </div>
                    : null
                }
                <div className='d-flex justify-content-center'>
                    <Button type='button' label='Cerrar Sesión' onClick={() => handleLogout()} icon='pi pi-sign-out' className='p-button-outlined' > </Button>
                </div>
            </OverlayPanel>   
        </>
    )
}

export default NavBar