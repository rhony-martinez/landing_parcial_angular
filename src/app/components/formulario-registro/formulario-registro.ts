import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GestionarUsuariosService } from '../../services/gestionar-usuarios.service';
import { NotificacionService } from '../../services/notificacion.service';
import { correoComCo, obligatorio } from '../../validators/usuario.validators';
import { MENSAJES_ERROR } from '../../validators/mensajes-error';

type Campo = 'nombres' | 'apellidos' | 'genero' | 'edad' | 'email';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-registro',
  styleUrl: './formulario-registro.css',
  templateUrl: './formulario-registro.html',
})
export class FormularioRegistro {
  private readonly fb = inject(FormBuilder);
  private readonly usuariosService = inject(GestionarUsuariosService);
  private readonly notificaciones = inject(NotificacionService);

  readonly envioIntentado = signal(false);

  readonly formulario = this.fb.nonNullable.group({
    nombres:   ['', [obligatorio, Validators.maxLength(20)]],
    apellidos: ['', [obligatorio, Validators.maxLength(20)]],
    genero:    ['', [obligatorio]],
    edad:      [null as number | null, [obligatorio, Validators.min(1), Validators.max(200)]],
    email:     ['', [obligatorio, correoComCo]],
  });

  /** Ítem 6: validación al cambiar el foco. */
  validarAlCambiarFoco(campo: Campo): void {
    const control = this.formulario.controls[campo];
    control.markAsTouched();
    control.updateValueAndValidity();
  }

  mostrarError(campo: Campo): boolean {
    const control = this.formulario.controls[campo];
    return control.invalid && (control.touched || this.envioIntentado());
  }

  mensajeError(campo: Campo): string {
    const errores = this.formulario.controls[campo].errors;
    if (!errores || !this.mostrarError(campo)) return '';
    const clave = Object.keys(MENSAJES_ERROR[campo]).find(k => k in errores);
    return clave ? MENSAJES_ERROR[campo][clave] : '';
  }

  /** Ítem 7: validación al hacer clic en «Registrarse». */
  registrar(): void {
    this.envioIntentado.set(true);
    this.formulario.markAllAsTouched();

    if (this.formulario.invalid) {
      this.notificaciones.mostrar('Por favor, complete correctamente el formulario', 'error');
      return;
    }

    const { nombres, apellidos, genero, edad, email } = this.formulario.getRawValue();
    const usuario = this.usuariosService.registrarUsuario(
      nombres.trim(), apellidos.trim(), genero, Number(edad), email.trim(),
    );

    console.log('Usuario registrado:', usuario);
    console.log('Total usuarios:', this.usuariosService.listarUsuarios());

    this.notificaciones.mostrar(
      `Registro exitoso: ${usuario.nombres} ${usuario.apellidos} | Género: ${usuario.genero} | Edad: ${usuario.edad} | Email: ${usuario.email}`,
    );

    this.formulario.reset();
    this.envioIntentado.set(false);
  }
}
