import API from '../conection/conection'
import authHeader from '../store/authHeader'

const CrudServices = {

    // --- Usuarios ---
    getUsers:   (filters={}) => GenericCrud.index('usuario', filters),
    createUser: (data) => GenericCrud.create('usuario', data),
    updateUser: (data, id) => GenericCrud.update('usuario', data, id),
    deleteUser: (id) => GenericCrud.delete('usuario', id),
    getUserInfo: () => GenericRequest.get('usuario/get-user-info'),
    getAllUsers: () => GenericRequest.get('usuario/get-all-users'),
    getUserRoles: () => GenericRequest.get('usuario/get-user-roles'),
    isEmailUnique: async (email) => GenericRequest.get('usuario/is-email-unique', {email}),
    isCiUnique: async (ci, from) => {
        // from es el nombre de la tabla puede ser usuario o persona
        let response = {}
        await API.get(`${from}/is-ci-unique`, { params: {ci: ci}, headers: authHeader() })
            .then(res => response = res)
            .catch(error => response = error.response)  
        return response
    },

    // --- Roles ---
    getRolesByAssignment: (id) => GenericRequest.get('usuario/get-roles-by-assignment', {id}),
    assignRoles:          (data) => GenericRequest.post('usuario/assign-roles', data),

    // --- Pagos ---
    getPayments: (filters={}) => GenericCrud.index('pago', filters),
    createPayment: (data) => GenericRequest.post('api/crear-pago', data),
    cancelPayment: (data) => GenericRequest.post('pago/anular-pago', data),
    
    // --- Transacciones ---
    getTransactions: (filters={}) => GenericCrud.index('transaccion', filters),
    createTransaction: (data) => GenericRequest.post('api/crear-transaccion', data),
    cancelTransaction: (data) => GenericRequest.post('transaccion/anular-transaccion', data),
    payTransaction: (id) => GenericRequest.get('transaccion/pagar-transaccion', {id}),
    payTransactions: (data) => GenericRequest.post('transaccion/pagar-transacciones', data),
    reverseTransaction: (id) => GenericRequest.get('transaccion/revertir-transaccion', {id}),

    // --- Personas ---
    getPersons: (filters = {}) => GenericCrud.index('persona', filters),
    createPerson: (data) => GenericCrud.create('persona', data),
    getPersonById: (id) => GenericCrud.view('persona', id),
    updatePerson: (data, id) => GenericCrud.update('persona', data, id),
    deletePerson: (id) => GenericCrud.delete('persona', id),
    getAllPersons: () => GenericRequest.get('persona/get-all-persons'),

    // --- Conceptos ---
    getConcepts: (filters = {}) => GenericCrud.index('concepto', filters),
    getActiveConcepts: () => GenericRequest.get('concepto/get-active-concepts'),
    getConceptoById: (id) => GenericCrud.view('concepto', id),
    createConcepto: (data) => GenericCrud.create('concepto', data),
    updateConcepto: (data, id) => GenericCrud.update('concepto', data, id),
    deleteConcepto: (id) => GenericCrud.delete('concepto', id),

    // --- Fuentes ---
    getFuentes: (filters = {}) => GenericCrud.index('fuente', filters),
    getFuenteById: (id) => GenericCrud.view('fuente', id),
    createFuente: (data) => GenericCrud.create('fuente', data),
    updateFuente: (data, id) => GenericCrud.update('fuente', data, id),
    deleteFuente: (id) => GenericCrud.delete('fuente', id),
    getAllSources: () => GenericRequest.get('fuente/get-all-sources'),

    // --- Razón de anulación ---
    getRazonAnulacion: (filters = {}) => GenericCrud.index('razon-anulacion', filters),
    getRazonAnulacionById: (id) => GenericCrud.view('razon-anulacion', id),
    createRazonAnulacion: (data) => GenericCrud.create('razon-anulacion', data),
    updateRazoAnulacion: (data, id) => GenericCrud.update('razon-anulacion', data, id),
    deleteRazonAnulacion: (id) => GenericCrud.delete('razon-anulacion', id),
    getAllReasons: () => GenericRequest.get('razon-anulacion/get-all-reasons'),

    // --- Unidades ---
    getUnits: (filters = {}) => GenericCrud.index('unidad', filters),
    getUnidadById: (id) => GenericCrud.view('unidad', id),
    createUnidad: (data) => GenericCrud.create('unidad', data),
    updateUnidad: (data, id) => GenericCrud.update('unidad', data, id),
    deleteUnidad: (id) => GenericCrud.delete('unidad', id),
    getAllUnits: () => GenericRequest.get('unidad/get-all-units'),
    getActiveUnits: () => GenericRequest.get('unidad/get-active-units'),

    // --- Cierre ---
    getCierre: (filters={}) => GenericCrud.index('cierre', filters),
    getCierreById: (id) => GenericCrud.view('cierre', id),
    createCierre: (data) => GenericCrud.create('cierre', data),
    updateCierre: (data, id) => GenericCrud.update('cierre', data, id),
    deleteCierre: (id) => GenericCrud.delete('cierre', id),
    getTipoCierres: (filters = {}) => GenericCrud.index('tipo-cierre', filters),
    getTipoCierreById: (id) => GenericCrud.view('tipo-cierre', id),
    createTipoCierre: (data) => GenericCrud.create('tipo-cierre', data),
    updateTipoCierre: (data, id) => GenericCrud.update('tipo-cierre', data, id),
    deleteTipoCierre: (id) => GenericCrud.delete('tipo-cierre', id),
    getTerninarCierre: (data) => GenericRequest.post('cierre/close-movements', data),
    isClosurePays: () => GenericRequest.get('cierre/is-closure'),

    // --- Sectores ---
    getAllSectors: () => GenericRequest.get('sector/get-all-sectors'),
    getSectores: (filters = {}) => GenericCrud.index('sector', filters),
    getSectorById: (id) => GenericCrud.view('sector', id),
    createSector: (data) => GenericCrud.create('sector', data),
    updateSector: (data, id) => GenericCrud.update('sector', data, id),
    deleteSector: (id) => GenericCrud.delete('sector', id),

    // --- Cargos ---
    getBalanceByCashier: () => GenericRequest.get('cargo/get-cashier-balance'),
    assignMontos: (data) => GenericRequest.post('cargo/amount-charge', data),
    cierreCargo: (data) => GenericRequest.post('cargo/close-charge', data),
    getSaldos: () => GenericRequest.get('cargo/get-all-balance'),

}

const GenericRequest = {
    /**
     * Realiza una petición get a la url pasada como parámetro
     * @param {string} url la url a la que se realizara la petición
     * @param {object} params los datos enviados en la url de la petición
     * @returns devuelve el response de la respuesta
     */
    get: async (url, params={}) => {
        let response = {}
        await API.get(url, { params, headers: authHeader() })
            .then(res => response = res)
            .catch(error => response = error.response)
        return response
    },
    /**
     * Realiza una petición post a la url pasada como parametro
     * @param {string} url la url a la que se realizara la petición
     * @param {object} data los datos enviados en el body de la petición
     * @param {object} params los datos enviados en la url de la petición
     * @returns devuelve el response de la respuesta
     */
    post: async (url, data, params={}) => {
        let response = {}
        await API.post(url, data, { params, headers: authHeader({'Content-Type': 'multipart/form-data'}) })
            .then(res => response = res)
            .catch(error => response = error.response)
        return response
    },
}

const GenericCrud = {
    /**
     * Realiza una petición get a la acción index del controlador pasado como parámetro
     * para obtener todos los registros
     * @param {string} controller el nombre del controlador que contiene el crud
     * @param {object} filters objeto clave-valor que son los filtros que se pasan en la url
     * @returns devuelve el response de la respuesta
     */
    index: async (controller, filters={}) => {
        let response = {}
        await API.get(`/${controller}/index`, { params: filters, headers: authHeader() })
            .then(res => response = res)
            .catch(error => response = error.response)
        return response
    },
    /**
     * Realiza una petición get a la acción view del controlador pasado como parámetro
     * para obtener la información de un registro
     * @param {string} controller el nombre del controlador que contiene el crud
     * @param {int} id el ID del registro que se desea obtener
     * @returns devuelve el response de la respuesta
     */
    view: async (controller, id) => {
        let response = {}
        await API.get(`/${controller}/view`, { params: {id: id}, headers: authHeader() })
            .then(res => response = res)
            .catch(error => response = error.response)
        return response
    },
    /**
     * Realiza una petición post a la acción create del controlador pasado como parámetro
     * para crear un nuevo registro
     * @param {string} controller el nombre del controlador que contiene el crud
     * @param {object} data los datos enviados en el body de la petición
     * @returns devuelve el response de la respuesta
     */
    create: async (controller, data) => {
        let response = {}
        await API.post(`/${controller}/create`, data, { headers: authHeader({'Content-Type': 'multipart/form-data'}) })
            .then(res => response = res)
            .catch(error => response = error.response)
        return response
    },
    /**
     * Realiza una petición put a la acción update del controlador pasado como parámetro
     * para actualizar la información de un registro
     * @param {string} controller el nombre del controlador que contiene el crud
     * @param {object} data los datos enviados en el body de la petición
     * @param {int} id el ID del registro del cual se actualizara su información
     * @returns devuelve el response de la respuesta
     */
    update: async (controller, data, id) => {
        let response = {}
        await API.put(`/${controller}/update`, data, { params: {id: id}, headers: authHeader({'Content-Type': 'application/x-www-form-urlencoded'}) })
            .then(res => response = res)
            .catch(error => response = error.response)  
        return response
    },
    /**
     * Realiza una petición delete a la acción delete del controlador pasado como parámetro
     * para eliminar un registro
     * @param {string} controller el nombre del controlador que contiene el crud
     * @param {int} id el ID del registro a ser eliminado
     * @returns devuelve el response de la respuesta
     */
    delete: async (controller, id) => {
        let response = {}
        await API.delete(`/${controller}/delete`, { params: {id: id}, headers: authHeader() })
            .then(res => response = res)
            .catch(error => response = error.response)  
        return response
    },
}

export default CrudServices
