// import { useEffect, useState, useRef } from 'react'
// import { Navigate } from 'react-router-dom'

// import { useDispatch, useSelector } from 'react-redux'
// import { setMessage } from '../../store/messageSlice'

// import { Card } from 'primereact/card'
// import { Dialog } from 'primereact/dialog'
// import { Button } from 'primereact/button'

// import CrudServices from '../../services/crud-service'
// import TableUsers from '../../components/user/TableUsers'
// import FormUpdateUser from '../../components/user/FormUpdateUser'
// import FormCreateUser from '../../components/user/FormCreateUser'
// import ViewInfoUser from '../../components/user/ViewInfoUser'


// import FormAssignUserRole from '../../components/user/FormAssignUserRole'



function UserIndex() {

  // const dispatch = useDispatch()
  //   // const userRoles = useSelector(state => state.auth.userRoles)
  //   const [users, setUsers] = useState([])
  //   const [pagination, setPagination] = useState({})
  //   const [allFilters, setAllFilters] = useState({})
  //   const [loading, setLoading] = useState(true)
  //   const [objRoles, setObjRoles] = useState({})
  //   const [showFormDialog, setShowFormDialog] = useState(false)
  //   const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  //   const [showInfoDialog, setShowInfoDialog] = useState(false)
  //   const [showRoleDialog, setShowRoleDialog] = useState(false)
  //   const [userSelected, setUserSelected] = useState(null)
  //   const formCreateRef = useRef()
  //   const formUpdateRef = useRef()
  //   const dataTableRef = useRef()

  //   useEffect(() => {
  //     const loadUsers = async (filters = {}) => {
  //         setLoading(true)
  //         let usersList = []
  //         const response = await CrudServices.getUsers(filters)
  //         if(response.status === 200) {
  //             usersList = response.data.data
  //             setPagination(response.data.pagination)
  //         } else {
  //             dispatch(setMessage({
  //                 global: true,
  //                 severity: 'error',
  //                 status: response.status,
  //             }))
  //         }
  //         setUsers(usersList)
  //         setLoading(false)
  //     }
  //     loadUsers(allFilters)
  // }, [allFilters, dispatch])

  // useEffect(() => {
  //   if(!showFormDialog) setUserSelected(null)
  // }, [showFormDialog])
  // useEffect(() => {
  //     if(!showInfoDialog) setUserSelected(null)
  // }, [showInfoDialog])
  // useEffect(() => {
  //     if(!showDeleteDialog) setUserSelected(null)
  // }, [showDeleteDialog])
  // useEffect(() => {
  //     if(!showRoleDialog) {
  //         setUserSelected(null)
  //         setObjRoles({})
  //     // } else {
  //     //     getRolesByAssignment()
  //     }
  // }, [showRoleDialog])

  // const hideFormDialog = () => setShowFormDialog(false)
  // const hideDeleteDialog = () => setShowDeleteDialog(false)
  // const hideInfoDialog = () => setShowInfoDialog(false)
  // const hideRoleDialog = () => setShowRoleDialog(false)
  // const openFormDialog = () => setShowFormDialog(true)
  // const openDeleteDialog = () => setShowDeleteDialog(true)
  // const openInfoDialog = () => setShowInfoDialog(true)
  // const openRoleDialog = () => setShowRoleDialog(true)

  //     // Obtiene los todos los roles y los roles del usuario seleccionado
  //     const getRolesByAssignment = async () => {
  //       if(userSelected) {
  //           const response = await CrudServices.getRolesByAssignment(userSelected.id)
  //           if(response.status === 200) {
  //               const userRoles = response.data.userRoles.sort()
  //               // Obtiene la diferencia de todos los roles menos los roles del usuario
  //               const roles = response.data.roles.filter(el => !userRoles.includes(el)).sort()
  //               setObjRoles({
  //                   roles: roles,
  //                   userRoles: userRoles
  //               })
  //           }
  //       }
  //   }

  //   // --- Controladores de eventos ---
  //   const handleSubmit = () => {
  //     if(userSelected) {
  //         if (formUpdateRef.current) {
  //             formUpdateRef.current.handleSubmit()
  //         }
  //     } else {
  //         if (formCreateRef.current) {
  //             formCreateRef.current.handleSubmit()
  //         }
  //     }
  // }

  // const handleDelete = async () => {
  //   if(userSelected) {
  //       const response = await CrudServices.deleteUser(userSelected.id)
  //       if(response.status === 204) {
  //           dispatch(setMessage({
  //               global: true,
  //               severity: 'success',
  //               title: 'El usuario fue eliminado exitosamente'
  //           }))
  //           setAllFilters({...allFilters})
  //       } else {
  //           dispatch(setMessage({
  //               global: true,
  //               severity: 'error',
  //               status: response.status,
  //               title: response.status === 500 ? 'El registro esta en uso' : null
  //           }))
  //           console.log(response)
  //       }
  //       hideDeleteDialog(false)
  //   }
  // }

  // const handleSubmitAssignRoles = async () => {
  //   if(userSelected) {
  //       const response = await CrudServices.assignRoles({id: userSelected.id, roles: objRoles.userRoles})
  //       if(response.status === 200) {
  //           hideRoleDialog()
  //           dispatch(setMessage({
  //               global: true,
  //               severity: 'success',
  //               title: response.data.message
  //           }))
  //       } else {
  //           dispatch(setMessage({
  //               global: true,
  //               severity: 'error',
  //               status: response.status,
  //           }))
  //           console.log(response)
  //       }
  //   }
  // }

  // const handleChangeRoles = (e)=>setObjRoles({roles:e.source, userRoles:e.target})

  // // --- Footer de los modals ---
  // const formDialogFooter = (
  //     <>
  //         <Button label='Cancelar' icon='pi pi-times' className='p-button-text' onClick={hideFormDialog} />
  //         <Button type='submit' label='Guardar' icon='pi pi-check' className='p-button-text' onClick={handleSubmit} />
  //     </>
  // )
  // const deleteDialogFooter = (
  //     <>
  //         <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideDeleteDialog} />
  //         <Button label='Si' icon='pi pi-check' className='p-button-text' onClick={handleDelete} />
  //     </>
  // )
  // const infoDialogFooter = <Button label='Cerrar' icon='pi pi-times' className='p-button-text' onClick={hideInfoDialog} />
  // const roleDialogFooter = (
  //     <>
  //         <Button label='Cancelar' icon='pi pi-times' className='p-button-text' onClick={hideRoleDialog} />
  //         <Button type='submit' label='Guardar' icon='pi pi-check' className='p-button-text' onClick={handleSubmitAssignRoles} />
  //     </>
  // )

      // --- Control de acceso según el rol de usuario ---
      // if(userRoles.init && !userRoles.Administrador) return <Navigate to='/' />


  return (
            // <Card className='px-3'>
            //    <h3 className='fw-bold'>Lista de Usuarios</h3>
            //   <div className='p-4'>
            //       <i className='pi pi-plus fs-5 cursor-pointer' onClick={openFormDialog} ></i>
            //   </div>
            //   <TableUsers 
            //         dataTableRef={dataTableRef}
            //         users={users}
            //         pagination={pagination}
            //         allFilters={allFilters}
            //         setAllFilters={setAllFilters}
            //         setUserSelected={setUserSelected}
            //         loading={loading}
            //         openDeleteDialog={openDeleteDialog}
            //         openFormDialog={openFormDialog}
            //         openInfoDialog={openInfoDialog}
            //         openRoleDialog={openRoleDialog}
            //   />
            //   <Dialog 
            //         visible={showFormDialog} 
            //         style={{ width: '800px' }} 
            //         header={userSelected ? 'Editar Usuario' : 'Crear Usuario'} 
            //         modal 
            //         className='p-fluid' 
            //         footer={formDialogFooter} 
            //         onHide={hideFormDialog}
            //     >
            //       <div>
            //         {userSelected ?
            //             <FormUpdateUser
            //                 formUpdateRef={formUpdateRef}
            //                 userSelected={userSelected}
            //                 hideFormDialog={hideFormDialog}
            //                 loadUsers={()=>setAllFilters({...allFilters, page: 1})}
            //                 /> :
            //             <FormCreateUser 
            //                 formCreateRef={formCreateRef} 
            //                 hideFormDialog={hideFormDialog} 
            //                 loadUsers={()=>{
            //                     if(dataTableRef.current) {
            //                         dataTableRef.current.reset()
            //                         setAllFilters({})
            //                     }
            //                 }} 
            //                 />
            //         }
            //     </div>
            //     </Dialog>
            //     <Dialog 
            //         visible={showDeleteDialog} 
            //         style={{ width: '450px' }} 
            //         header='Confirmar' 
            //         modal 
            //         footer={deleteDialogFooter} 
            //         onHide={hideDeleteDialog}
            //         >
            //         <div className=''>
            //             <i className='pi pi-exclamation-triangle me-3' style={{ fontSize: '2rem'}} />
            //             {userSelected && <span>Esta seguro de eliminar el Usuario {userSelected.apellidos + ' ' + userSelected.nombres}?</span>}
            //         </div>
            //     </Dialog>
            //     <Dialog 
            //         visible={showInfoDialog} 
            //         style={{ width: '450px' }} 
            //         header='Información de Usuario' 
            //         modal 
            //         footer={infoDialogFooter} 
            //         onHide={hideInfoDialog}
            //     >
            //         <ViewInfoUser userSelected={userSelected} />
            //       </Dialog>
            //       <Dialog
            //           visible={showRoleDialog}
            //           style={{ width: '900px' }}
            //           header='Asignar roles'
            //           modal
            //           footer={roleDialogFooter}
            //           onHide={hideRoleDialog}
            //         >
            //           {userSelected ? 
            //               <div className='px-3'>Usuario: {userSelected.apellidos} {userSelected.nombres}</div> : 
            //               null 
            //           }
            //           <FormAssignUserRole
            //               source={objRoles.roles ? objRoles.roles : []}
            //               target={objRoles.userRoles ? objRoles.userRoles : []}
            //               onChange={handleChangeRoles}
            //         />
            //         </Dialog>
            // </Card>
            <>
              <h1>user</h1>
            </>
  )
}

export default UserIndex