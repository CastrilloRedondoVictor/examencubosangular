import { Component } from '@angular/core';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nombre: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private _cubosService: CubosService,
    private router: Router
  ){}

  // Método para manejar el envío del formulario
  onRegister() {
    // Llamamos al servicio de autenticación
    this._cubosService.register(this.nombre, this.email, this.password).subscribe(
      (response) => {
        // Al recibir una respuesta positiva, almacenamos el token en el localStorage
        console.log(response)
        this.router.navigate(['/login']);  // Redirigimos al usuario a la página principal
      },
      (error) => {
        // Si ocurre un error, mostramos el mensaje de error
        this.errorMessage = 'Error al registrar. Intenta nuevamente.';
      }
    );
  }

}
