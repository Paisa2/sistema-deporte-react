import * as Yup from 'yup'
import messagesValidators from './MessagesValidators'

const LoginValidators = Yup.object({
    email: Yup.string()
        .required(messagesValidators.required),
    password: Yup.string()
        .required(messagesValidators.required),
})

export default LoginValidators