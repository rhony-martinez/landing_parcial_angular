import { Component } from '@angular/core';
import { MEDICOS } from '../../data/medicos.data';
import { ListaEspecialidades } from '../lista-especialidades/lista-especialidades';
import { MedicoCard } from '../medico-card/medico-card';

@Component({
  imports: [ListaEspecialidades, MedicoCard],
  selector: 'app-medicos-por-especialidad',
  styleUrl: './medicos-por-especialidad.css',
  templateUrl: './medicos-por-especialidad.html',
})
export class MedicosPorEspecialidad {
  readonly medicos = MEDICOS;
}
