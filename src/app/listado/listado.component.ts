import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { PeliculasType } from './peliculasType';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ListadoComponent implements OnInit {

  peliculas:any = [];
  constructor(private peliculasService: PeliculasService){}

  ngOnInit(){
    this.getPeliculas();
  }
  getPeliculas(){
    this.peliculasService.getPeliculas()
    .then((res:any) => {
      this.peliculas = res.movies;
    })
  }
}
