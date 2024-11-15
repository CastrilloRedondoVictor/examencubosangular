import { Component, OnInit } from '@angular/core';
import { CubosService } from '../../services/cubos.service';
import { Cubo } from '../../models/Cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public cubos!: Cubo[]


  constructor(
    private _cubosService: CubosService
  ){}


  ngOnInit(): void {
    this._cubosService.getCubos().subscribe(response => {
      this.cubos = response
    })
  }

}
