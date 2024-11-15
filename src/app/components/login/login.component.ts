import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';// Servicio para manejar la autenticación
import { CubosService } from '../../services/cubos.service';
import { Perfil } from '../../models/Perfil';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  perfil!: Perfil

  constructor(
    private _cubosService: CubosService,
    private router: Router
  ){}
  ngOnInit(): void {
    if(this.isLogged()){
      this.getPerfil()
    }
  }

  isLogged() {
    return this._cubosService.isLogged()
  }

  // Método para manejar el envío del formulario
  onLogin() {
    // Llamamos al servicio de autenticación
    this._cubosService.login(this.email, this.password).subscribe(
      (response) => {
        // Al recibir una respuesta positiva, almacenamos el token en el localStorage
        localStorage.setItem('access_token', response.response);
        this.router.navigate(['/']);  // Redirigimos al usuario a la página principal
      },
      (error) => {
        // Si ocurre un error, mostramos el mensaje de error
        this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
      }
    );
  }

  getPerfil() {
    this._cubosService.getPerfil().subscribe(response => {
      this.perfil = response
    })
  }
}
