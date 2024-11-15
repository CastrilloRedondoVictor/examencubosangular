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

  onRegister() {
    this._cubosService.register(this.nombre, this.email, this.password).subscribe(
      (response) => {
        console.log(response)
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = 'Error al registrar. Intenta nuevamente.';
      }
    );
  }

}
