import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any [] = [];
  cargada = false;

  constructor(private http: HttpClient){
    this.cargarInfo();
    this.cargarEquipo();
    this.cargada = false;
  }

  private cargarInfo() {
   // leer el archivo json
   this.http.get('assets/data/data-paginas.json')
   .subscribe( (resp: InfoPagina) => {
     this.cargada = true;
     this.info = resp;
   });
  }

  private cargarEquipo() {
    // leer el archivo json
    this.http.get('https://venezuela-2020.firebaseio.com/equipo.json')
    .subscribe( (resp: any []) => {
      this.equipo = resp;
    });
   }
}
