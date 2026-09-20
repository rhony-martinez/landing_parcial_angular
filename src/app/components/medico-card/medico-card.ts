import { Component, input } from '@angular/core';
import { Medico } from '../../models/medico';

@Component({
  imports: [],
  selector: 'app-medico-card',
  styleUrl: './medico-card.css',
  templateUrl: './medico-card.html',
})
export class MedicoCard {
  medico = input.required<Medico>();
}
