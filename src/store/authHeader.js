/**
 * Retorna la cabecera de Autorizacion con el token asociado al usuario \
 * que ha iniciado sesion en el sistema
 */
export default function authHeader(headers={}) {
    // obtiene el token del almacenamiento local
    const item = localStorage.getItem('user-p');
    const token = item ? JSON.parse(item) : null
    // verifica si hay un usuario activo (logueado) en el sistema
    if (token.accessToken) {
        // retorna la cabecera de Autorizacion con el token del usuario correspondiente
        return Object.assign({ 'Authorization': 'bearer' + token.accessToken}, headers);
    }else {
        return {};
    }
}