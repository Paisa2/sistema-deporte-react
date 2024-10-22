import { Formik, Form, ErrorMessage } from 'formik'
import LoginValidators from '../validators/LoginValidators'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { clearMessage } from '../store/messageSlice'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputFormik } from '../components/formik/FormikFormComponents'

function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const message = useSelector(state => state.message)
    const handleSubmit = async (values) => {
        if(dispatch(login(values))) {
            dispatch(clearMessage())
            navigate('/')
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <div style={{width: '450px'}}>
                <Card className='px-4'>
                    <div className='text-center fs-2 mb-4'>Iniciar sesión</div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={ LoginValidators }
                        onSubmit={ handleSubmit }
                    >
                        {() => (
                            <Form noValidate>
                                <div className='mb-3'>
                                    <div className='d-flex align-items-center'>
                                        <label style={{width: '8rem'}}>Correo:</label>
                                        <InputFormik name='email' classNameInput='w-100' onlyInput />
                                    </div>
                                    <ErrorMessage name='email'>{msg => <div className='invalid-feedback d-block text-center'>{msg}</div>}</ErrorMessage>
                                </div>
                                <div className='mb-3'>
                                    <div className='d-flex align-items-center'>
                                        <label style={{width: '8rem'}}>Contraseña:</label>
                                        <InputFormik name='password' type='password' classNameInput='w-100' onlyInput />
                                    </div>
                                    <ErrorMessage name='password'>{msg => <div className='invalid-feedback d-block text-center'>{msg}</div>}</ErrorMessage>
                                </div>
                                {!message.global ? <div className='invalid-feedback d-block text-center'>{message.detail}</div> : null}
                                <div className='d-flex justify-content-center pt-4'>
                                    <Button type='submit' label='Iniciar Sesión' />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Card>
            </div>
        </div>
    )
}

export default Login