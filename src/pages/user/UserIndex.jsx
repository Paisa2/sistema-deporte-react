
import { Card } from 'primereact/card'
import { Dialog } from 'primereact/dialog'



import FormUser from '../../components/user/FormUser'
import ViewInfoUser from '../../components/user/ViewInfoUser'
import FormAssignUserRole from '../../components/user/FormAssignUserRole'

function UserIndex() {

    return (
        <Card className='p-3'>
            <h2 className='fw-bold mt-0'>Lista de Usuarios</h2>
            <div className='p-4'>
                <i className='pi pi-plus fs-5 cursor-pointer'></i>
            </div>
            
            <Dialog >
                <div>
                    <FormUser/>
                </div>
            </Dialog>
            <Dialog 
                style={{ width: '450px' }} 
                header='Confirmar' 
                modal 
                >
                <div className=''>
                    <i className='pi pi-exclamation-triangle me-3' style={{ fontSize: '2rem'}} />
                </div>
            </Dialog>
            <Dialog 
                style={{ width: '450px' }} 
                header='Información de Usuario' 
                modal 
                >
                <ViewInfoUser/>
            </Dialog>
            <Dialog
                style={{ width: '900px' }}
                header='Asignar roles'
                modal
                >
                <FormAssignUserRole
                />
            </Dialog>
        </Card>
    )
}

export default UserIndex