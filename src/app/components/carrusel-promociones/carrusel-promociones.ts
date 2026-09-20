import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { PROMOCIONES } from '../../data/promociones.data';

@Component({
  imports: [NgbCarouselModule],
  selector: 'app-carrusel-promociones',
  styleUrl: './carrusel-promociones.css',
  templateUrl: './carrusel-promociones.html',
  encapsulation: ViewEncapsulation.None,
})
export class CarruselPromociones {
  readonly promociones = PROMOCIONES;
}
