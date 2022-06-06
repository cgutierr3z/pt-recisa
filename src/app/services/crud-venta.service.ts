import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { venta } from './venta';

@Injectable({
  providedIn: 'root'
})
export class CrudVentaService {

  //API: string="https://cgutierr3z.000webhostapp.com/recisa/api/";
  API: string="http://localhost/pt-recisa/api/";
  constructor(private ch:HttpClient) {

  }

  addVenta(data:venta):Observable<any>{
    return this.ch.post(this.API+"?add-venta",data);
  }

  getAllVenta(){
    return this.ch.get(this.API+"?query-venta");
  }

  getVenta(id:any){
    return this.ch.get(this.API+"?query-venta="+id);
  }

  delVenta(id:any):Observable<any>{
    return this.ch.get(this.API+"?del-venta="+id);
  }
}
