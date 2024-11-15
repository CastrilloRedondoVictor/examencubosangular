import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '../../models/Comentario';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export class ComentarioComponent{

  @Input() comentario!: Comentario;




}
