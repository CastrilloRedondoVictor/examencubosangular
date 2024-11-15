import { Component, OnInit } from '@angular/core';
import { Compra } from '../../models/Compra';
import { CubosService } from '../../services/cubos.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit {

  public compras!: Compra[]


  constructor(
    private _cubosService: CubosService,
  ) {}


  ngOnInit(): void {
    this.getCompras();
  }

  getCompras(){
    this._cubosService.getCompras().subscribe(response => {
      this.compras = response
    })
  }
}
