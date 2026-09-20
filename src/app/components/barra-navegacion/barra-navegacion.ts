import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [NgbCollapse],
  selector: 'app-barra-navegacion',
  styleUrl: './barra-navegacion.css',
  templateUrl: './barra-navegacion.html',
})
export class BarraNavegacion {
  colapsado = true;
  readonly enlaces = [
    { texto: 'Inicio', ancla: '#' },
    { texto: 'Promociones', ancla: '#seccion1' },
    { texto: 'Médicos', ancla: '#seccion2' },
    { texto: 'Registro', ancla: '#seccion3' },
  ];
}
