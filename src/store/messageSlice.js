import { createSlice } from '@reduxjs/toolkit'

// global: true if the message is global it show in a toast or false to show in other element
// severities: success, info, warn, error (optional)
// status: status code of http response (optional)
// title: title of message
// detail: detail of message
const initialState = {
    existMessage: false,
    global: false,
    severity: 'info',
    status: 0,
    title: '',
    detail: '',
}

const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
        setMessage: (state, action) => {
            if(typeof action.payload === 'object') {
                state.existMessage = true
                state.global       = action.payload.global
                state.severity     = action.payload.severity ? action.payload.severity : 'info'
                state.status       = action.payload.status ? action.payload.status : ''
                state.detail       = action.payload.detail ? 
                    action.payload.detail 
                    : (
                        action.payload.status ? 
                        (
                            HTTPStatusCodes[action.payload.status].detail ? 
                                HTTPStatusCodes[action.payload.status].detail.es 
                                : ''
                        )
                        : ''
                    )
                state.title        = action.payload.title ? 
                    action.payload.title  
                    : (
                        action.payload.status ? 
                        (
                            HTTPStatusCodes[action.payload.status].title.es ? 
                                HTTPStatusCodes[action.payload.status].title.es 
                                : HTTPStatusCodes[action.payload.status].title
                        )
                        : ''
                    )
            } else if(typeof action.payload === 'string') {
                state.existMessage = true
                state.detail = action.payload
            }
        },
        clearMessage: (state) => {
            state.existMessage = false
            state.global       = false
            state.severity     = ''
            state.status       = 0
            state.title        = ''
            state.detail       = ''
        }
	},
})

const HTTPStatusCodes = {
    100: { 
        title: 'Continue'
    },
    101: { 
        title: 'Switching Protocols'
    },
    102: { 
        title: 'Processing'
    },
    118: { 
        title: 'Connection timed out'
    },
    200: { 
        title: {
            es: 'Petición realizada exitosamente',
            en: 'OK'
        }
    },
    201: { 
        title: {
            es: 'Recurso creado exitosamente',
            en: 'Created'
        }
    },
    202: { 
        title: 'Accepted'
    },
    203: { 
        title: 'Non-Authoritative'
    },
    204: { 
        title: {
            es: 'Petición realizada exitosamente',
            en: 'No Content'
        }
    },
    205: { 
        title: 'Reset Content'
    },
    206: { 
        title: 'Partial Content'
    },
    207: { 
        title: 'Multi-Status'
    },
    208: { 
        title: 'Already Reported'
    },
    210: { 
        title: 'Content Different'
    },
    226: { 
        title: 'IM Used'
    },
    300: { 
        title: 'Multiple Choices'
    },
    301: { 
        title: 'Moved Permanently'
    },
    302: { 
        title: 'Found'
    },
    303: { 
        title: 'See Other'
    },
    304: { 
        title: 'Not Modified'
    },
    305: { 
        title: 'Use Proxy'
    },
    306: { 
        title: 'Reserved'
    },
    307: { 
        title: 'Temporary Redirect'
    },
    308: { 
        title: 'Permanent Redirect'
    },
    310: { 
        title: 'Too many Redirect'
    },
    400: { 
        title: {
            es: 'Petición fallida',
            en: 'Bad Request'
        }
    },
    401: { 
        title: {
            es: 'Acceso no autorizado',
            en: 'Unauthorized'
        },
        detail: {
            es: 'Su sesión ha expirado.',
            en: 'Your request was made with invalid credentials.'
        }
    },
    402: { 
        title: 'Payment Required'
    },
    403: { 
        title: {
            es: 'Acceso prohibido',
            en: 'Forbidden'
        }
    },
    404: { 
        title: {
            es: 'Recurso no encontrado',
            en: 'Not Found'
        }
    },
    405: { 
        title: {
            es: 'Método no permitido',
            en: 'Method Not Allowed'
        }
    },
    406: { 
        title: 'Not Acceptable'
    },
    407: { 
        title: 'Proxy Authentication Required'
    },
    408: { 
        title: 'Request Time-out'
    },
    409: { 
        title: 'Conflict'
    },
    410: { 
        title: 'Gone'
    },
    411: { 
        title: 'Length Required'
    },
    412: { 
        title: 'Precondition Failed'
    },
    413: { 
        title: 'Request Entity Too Large'
    },
    414: { 
        title: 'Request-URI Too Long'
    },
    415: { 
        title: 'Unsupported Media Type'
    },
    416: { 
        title: 'Requested range unsatisfiable'
    },
    417: { 
        title: 'Expectation failed'
    },
    418: { 
        title: 'I\'m a teapot'
    },
    421: { 
        title: 'Misdirected Request'
    },
    422: { 
        title: {
            es: 'Fallo en la validación de datos',
            en: 'Unprocessable entity'
        },
        detail: {
            es: 'Hay campos con errores.',
            en: 'There are fields with errors.'
        }
    },
    423: { 
        title: 'Locked'
    },
    424: { 
        title: 'Method failure'
    },
    425: { 
        title: 'Unordered Collection'
    },
    426: { 
        title: 'Upgrade Required'
    },
    428: { 
        title: 'Precondition Required'
    },
    429: { 
        title: 'Too Many Requests'
    },
    431: { 
        title: 'Request Header Fields Too Large'
    },
    449: { 
        title: 'Retry With'
    },
    450: { 
        title: 'Blocked by Windows Parental Controls'
    },
    451: { 
        title: 'Unavailable For Legal Reasons'
    },
    500: { 
        title: {
            es: 'Error interno de servidor',
            en: 'Internal Server Error'
        }
    },
    501: { 
        title: 'Not Implemented'
    },
    502: { 
        title: 'Bad Gateway or Proxy Error'
    },
    503: { 
        title: 'Service Unavailable'
    },
    504: { 
        title: 'Gateway Time-out'
    },
    505: { 
        title: 'HTTP Version not supported'
    },
    507: { 
        title: 'Insufficient storage'
    },
    508: { 
        title: 'Loop Detected'
    },
    509: { 
        title: 'Bandwidth Limit Exceeded'
    },
    510: { 
        title: 'Not Extended'
    },
    511: {
        title: 'Network Authentication Required'
    }
    
}

export const { setMessage, clearMessage } = messageSlice.actions
export default messageSlice.reducer
