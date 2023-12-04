import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculasType } from '../listado/peliculasType';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  generos:any = [];
  peliculas:PeliculasType[] = [];
  tablaFiltrado:PeliculasType[] = [];
  tablaFiltradoNombre:PeliculasType[] = [];

  // formulario: FormGroup;
  _filtroTexto:string = "";

  get filtroTexto(){
    return this._filtroTexto;
  }

  set filtroTexto(value:string){
    this.tablaFiltradoNombre = this.fFiltroPeliculasNombre(value)
    this.tablaFiltrado = this.tablaFiltradoNombre.length > 0 ? this.fFiltroPeliculasNombre(value) : this.tablaFiltrado;
  }

  constructor(
    private peliculasService:PeliculasService,
    ){}

  async ngOnInit(){
    this.getGeneros();
    this.getPeliculas();
  }
  getGeneros(){//obtengo los generos
    this.peliculasService.getPeliculas()
    .then((res:any) => {
      console.log(res)
      this.generos = res.genres
      .map((obj:any)=>({
        title: obj,
        estado: false,
        btn: "btn btn-basic"
      }));
    })
  }
  getPeliculas(){//obtengo las películas
    this.peliculasService.getPeliculas()
    .then((res:any) => {
      this.peliculas = res.movies;
      this.tablaFiltrado = this.peliculas;  // asigno a la tabla mostrada el array de peliculas
    })
  }
  // --- filtros
  async fFiltro(pGenero:string){//obtengo el boton de filtrado y hago un filtro
    await this.fCambiaEstado(pGenero)
    const generosActivos = this.generos.filter((obj:any) => obj.estado).map((genero:any) => genero.title);//filtro los activos y hago un arreglo de generos nuevos
    if (generosActivos.length > 0) {
      this.tablaFiltrado = this.peliculas.filter((item:any)=> 
        generosActivos.includes(item.genre)
      );
    }else{
      this.tablaFiltrado = this.peliculas;
    }
    console.log(this.generos)
  }
  async fCambiaEstado(pGenero:string){
    for await (const item of this.generos) {
      if (item.title == pGenero && item.estado == false) {
        item.estado = true;
        item.btn = "btn btn-primary";
      }else if(item.title == pGenero && item.estado == true){
        item.estado = false;
        item.btn = "btn btn-basic";
      }
    }
  }

  fFiltroPeliculasNombre(pFilter:string){
    if (this.tablaFiltrado.length === 0 || pFilter === '') {
      return this.peliculas;
    }else{
      return this.tablaFiltrado.filter((item) =>{
        // return item.title.toLowerCase() === pFilter.toLowerCase()
        return item.title.toLowerCase().includes(pFilter.toLowerCase())
      })
    }
  }

}
