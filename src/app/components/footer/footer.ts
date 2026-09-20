import { Component } from '@angular/core';
import { REDES_SOCIALES } from '../../data/redes-sociales.data';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  readonly redes = REDES_SOCIALES;
  readonly anio = new Date().getFullYear();
  readonly contacto = [
    { icono: 'fas fa-location-dot', texto: 'Calle 45 # 12-30, Bogotá' },
    { icono: 'fas fa-phone', texto: '(601) 555-1234' },
    { icono: 'fas fa-envelope', texto: 'contacto@clinicapiedrazul.com' },
    { icono: 'fas fa-clock', texto: 'Lun - Vie: 7:00 a.m. - 6:00 p.m.' },
  ];
  readonly enlaces = [
    { texto: 'Promociones', ancla: '#seccion1' },
    { texto: 'Nuestros médicos', ancla: '#seccion2' },
    { texto: 'Registro de usuarios', ancla: '#seccion3' },
  ];
}
