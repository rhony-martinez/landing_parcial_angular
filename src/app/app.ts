import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './components/encabezado/encabezado';
import { BarraNavegacion } from './components/barra-navegacion/barra-navegacion';
import { CarruselPromociones } from './components/carrusel-promociones/carrusel-promociones';
import { MedicosPorEspecialidad } from './components/medicos-por-especialidad/medicos-por-especialidad';
import { FormularioRegistro } from './components/formulario-registro/formulario-registro';
import { Footer } from './components/footer/footer';
import { Notificaciones } from './components/notificaciones/notificaciones';

@Component({
  imports: [RouterOutlet, Encabezado, BarraNavegacion, CarruselPromociones, MedicosPorEspecialidad, FormularioRegistro, Footer, Notificaciones],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('landing_parcial_angular');
}
