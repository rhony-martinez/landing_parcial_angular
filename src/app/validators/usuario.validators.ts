import { ValidatorFn } from '@angular/forms';

const REGEX_CORREO = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co)$/;

/** Obligatorio: no acepta vacío ni solo espacios (equivale a tu trim()). */
export const obligatorio: ValidatorFn = (control) => {
    const valor = control.value;
    return valor === null || valor === undefined || String(valor).trim() === ''
        ? { obligatorio: true }
        : null;
};

/** Formato nombre@dominio.com o .co */
export const correoComCo: ValidatorFn = (control) => {
    const valor = String(control.value ?? '');
    return valor === '' || REGEX_CORREO.test(valor) ? null : { formatoCorreo: true };
};