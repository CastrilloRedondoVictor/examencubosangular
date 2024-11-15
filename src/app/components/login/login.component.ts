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


  onLogin() {
    this._cubosService.login(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('access_token', response.response);
        this.router.navigate(['/']);
      },
      (error) => {
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
