import { Component, inject } from '@angular/core';
import { NotificacionService } from '../../services/notificacion.service';

@Component({
  imports: [],
  selector: 'app-notificaciones',
  styleUrl: './notificaciones.css',
  templateUrl: './notificaciones.html',
})
export class Notificaciones {
  readonly notificaciones = inject(NotificacionService).notificaciones;
}
