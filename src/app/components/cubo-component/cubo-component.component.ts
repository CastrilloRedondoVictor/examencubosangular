import { Component } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ActivatedRoute } from '@angular/router';
import { CubosService } from '../../services/cubos.service';
import { Comentario } from '../../models/Comentario';

@Component({
  selector: 'app-cubo-component',
  templateUrl: './cubo-component.component.html',
  styleUrl: './cubo-component.component.css'
})
export class CuboComponentComponent {
  public cubo: Cubo = {
    "idCubo": 0,
    "nombre": "",
    "modelo": "",
    "marca": "",
    "color": "",
    "imagen": "",
    "precio": 0,
    "valoracion": 0
  };
  public comentarios!: Comentario[];


  constructor(
    private route: ActivatedRoute,
    private _cubosService: CubosService,
  ) {  }


  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.getDepartamento(id)
    this.getComentarios(id)
  }

  getDepartamento(id: number){
    this._cubosService.getCubo(id).subscribe(response => {
      this.cubo = response
    })
  }

  getComentarios(id: number){
    this._cubosService.getComentarios(id).subscribe(response => {
      this.comentarios = response
    })
  }
}
