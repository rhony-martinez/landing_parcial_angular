import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({ providedIn: 'root' })
export class UsuarioRepository {
    private readonly usuarios: Usuario[] = [];

    agregar(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    obtenerTodos(): readonly Usuario[] {
        return this.usuarios;
    }

    buscarPorId(id: number): Usuario | undefined {
        return this.usuarios.find(u => u.id === id);
    }

    siguienteId(): number {
        return this.usuarios.length + 1;
    }
}