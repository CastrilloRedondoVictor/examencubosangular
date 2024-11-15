import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CubosService } from '../../services/cubos.service';
import { ActivatedRoute } from '@angular/router';
import { Cubo } from '../../models/Cubo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css'
})
export class MarcaComponent implements OnInit {
  public cubos!: Cubo[]
  private routeSub!: Subscription


  constructor(
    private route: ActivatedRoute,
    private _cubosService: CubosService,
  ) {}


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const marca = params['marca'];
      this.getCubosMarca(marca);
    });
  }

  getCubosMarca(marca: string){
    this._cubosService.getCubosMarca(marca).subscribe(response => {
      this.cubos = response
    })
  }
}
