import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { estacion } from './estacion';

@Injectable({
  providedIn: 'root'
})
export class CrudEstacionService {
  API: string="http://localhost/pt-recisa/api/";
  constructor(private ch:HttpClient) {

  }

  addEstacion(data:estacion):Observable<any>{
    return this.ch.post(this.API+"?add-estacion",data);
  }

  editEstacion(id:any,data:any):Observable<any>{
    return this.ch.post(this.API+"?edit-estacion="+id,data);
  }

  getAllEstacion(){
    return this.ch.get(this.API+"?query-estacion");
  }

  getEstacion(id:any){
    return this.ch.get(this.API+"?query-estacion="+id);
  }

  delEstacion(id:any):Observable<any>{
    return this.ch.get(this.API+"?del-estacion="+id);
  }
}
