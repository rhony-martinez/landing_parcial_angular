/** El orden de las claves define qué error se muestra primero. */
export const MENSAJES_ERROR: Record<string, Record<string, string>> = {
    nombres: {
        obligatorio: 'El campo nombres es obligatorio',
        maxlength: 'Longitud del nombre no válida (máx. 20 caracteres)',
    },
    apellidos: {
        obligatorio: 'Los apellidos son obligatorios',
        maxlength: 'Longitud del apellido no válida (máx. 20 caracteres)',
    },
    genero: {
        obligatorio: 'El género es obligatorio',
    },
    edad: {
        obligatorio: 'La edad es obligatoria',
        min: 'Valor no válido para la edad (1-200)',
        max: 'Valor no válido para la edad (1-200)',
    },
    email: {
        obligatorio: 'El correo electrónico es obligatorio',
        formatoCorreo: 'El correo no cumple con el formato esperado',
    },
};