import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoLugarIdx } from '../interfaces/info-lugares-idx.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoLugarService {

  lugaresidx: InfoLugarIdx[]  = [];
  lugaresFiltrados: InfoLugarIdx[]  = [];
  cargando = true;

  constructor(private http: HttpClient){
    
    this.cargarlugaresIdx();
  }


  private cargarlugaresIdx() {

      return new Promise( (resolve, reject ) => {

         this.http.get('https://venezuela-2020.firebaseio.com/lugares_idx.json')
           .subscribe( (resp: InfoLugarIdx[]) => {
             this.lugaresidx = resp;
             this.cargando = false;
             resolve();
            });
       });
  }

  getLugar( id: string ) {
    return this.http.get(`https://venezuela-2020.firebaseio.com/lugares/${ id }.json`);
  }

  buscarLugar( termino: string) {

    if (this.lugaresidx.length === 0) {
      this.cargarlugaresIdx().then(()=>{
        this.filtrarLugar( termino); 
      }); 
    } else{
        this.filtrarLugar( termino); 
    }
  };

  private filtrarLugar( termino: string) {
    
    this.lugaresFiltrados = [];
    termino = termino.toLocaleLowerCase();
    this.lugaresidx.forEach( site => {

      const nombre = site.nombre.toLocaleLowerCase();
      const categoria = site.categoria.toLocaleLowerCase();

      if (categoria.indexOf(termino) >= 0 || nombre.indexOf(termino) >= 0 ) {
        this.lugaresFiltrados.push(site);
      }

    });
  }

}
