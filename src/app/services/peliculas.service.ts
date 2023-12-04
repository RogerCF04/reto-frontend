import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  getPeliculas():Promise<any>{
    return new Promise(function(resolve){
      var ruta = "http://localhost:80/peliculas";
      axios.get('/assets/data.json').then(res =>{
        resolve(res.data);
      }).then()
    })
  }
}
