import { Component } from '@angular/core';
import { REDES_SOCIALES } from '../../data/redes-sociales.data';

@Component({
  imports: [],
  selector: 'app-encabezado',
  styleUrl: './encabezado.css',
  templateUrl: './encabezado.html',
})
export class Encabezado {
  readonly redes = REDES_SOCIALES;
}
