const messagesValidators = {
    max: (num, type='caracteres') => {
        return `Debe tener ${num} ${type} o menos`
    },
    matchDecimal: (decimals) => {
        return `Debe ser un número con ${decimals} decimal${decimals>1?'es':''}`
    },
    onlyCharacters: 'Solo se permiten caracteres',
    onlyLetters: 'Solo se permiten letras',
    onlyNumbers: 'Solo se permiten números',
    required: 'Requerido',
}

export default messagesValidators