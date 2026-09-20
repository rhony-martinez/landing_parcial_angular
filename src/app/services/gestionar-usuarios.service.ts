import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioRepository } from '../repositories/usuario.repository';

@Injectable({ providedIn: 'root' })
export class GestionarUsuariosService {
    private readonly repo = inject(UsuarioRepository);

    registrarUsuario(nombres: string, apellidos: string, genero: string, edad: number, email: string): Usuario {
        const usuario = new Usuario(this.repo.siguienteId(), nombres, apellidos, genero, edad, email);
        this.repo.agregar(usuario);
        return usuario;
    }

    listarUsuarios(): readonly Usuario[] {
        return this.repo.obtenerTodos();
    }

    buscarUsuario(id: number): Usuario | undefined {
        return this.repo.buscarPorId(id);
    }
}