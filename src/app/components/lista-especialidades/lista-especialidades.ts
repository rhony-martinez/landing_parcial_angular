import { Component, signal } from '@angular/core';
import { ESPECIALIDADES } from '../../data/especialidades.data';
import { Especialidad } from '../../models/especialidad';

@Component({
  imports: [],
  selector: 'app-lista-especialidades',
  styleUrl: './lista-especialidades.css',
  templateUrl: './lista-especialidades.html',
})
export class ListaEspecialidades {
  readonly especialidades = ESPECIALIDADES;
  readonly seleccionada = signal<Especialidad | null>(null);

  seleccionar(esp: Especialidad): void {
    this.seleccionada.set(esp);
  }
}
