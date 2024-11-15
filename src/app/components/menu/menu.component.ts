import { Component, OnInit } from '@angular/core';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  marcas!: string[]


  constructor(
    private _cubosService: CubosService,
    private router: Router
  ){}


  ngOnInit(): void {
    this._cubosService.getMarcas().subscribe(response => {
      this.marcas = response
    })
  }

  isLogged() {
    return this._cubosService.isLogged()
  }

  logOut() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login'])
  }

}
