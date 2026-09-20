export class Usuario {
    constructor(
        public id: number,
        public nombres: string,
        public apellidos: string,
        public genero: string,
        public edad: number,
        public email: string,
    ) {}
}