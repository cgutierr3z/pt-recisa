import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { asesor } from './asesor';

@Injectable({
  providedIn: 'root'
})
export class CrudAsesorService {
  
  //API: string="https://cgutierr3z.000webhostapp.com/recisa/api/";
  API: string="http://localhost/pt-recisa/api/";
  constructor(private ch:HttpClient) {

  }

  addAsesor(data:asesor):Observable<any>{
    return this.ch.post(this.API+"?add-asesor",data);
  }

  editAsesor(id:any,data:any):Observable<any>{
    return this.ch.post(this.API+"?edit-asesor="+id,data);
  }

  getAllAsesor(){
    return this.ch.get(this.API+"?query-asesor");
  }

  getAsesor(id:any){
    return this.ch.get(this.API+"?query-asesor="+id);
  }

  delAsesor(id:any):Observable<any>{
    return this.ch.get(this.API+"?del-asesor="+id);
  }

}
