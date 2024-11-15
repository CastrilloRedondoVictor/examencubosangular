import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent implements OnInit {

  public cubos!: Cubo[]
  public cubo: number = 1


  constructor(
    private _cubosService: CubosService,
    private router: Router
  ){}


  ngOnInit(): void {
    this._cubosService.getCubos().subscribe(response => {
      this.cubos = response
    })
  }

  onSubmit() {
    this._cubosService.postPedido(this.cubo).subscribe(() => {
      this.router.navigate(['/compras'])
    })
  }
}
