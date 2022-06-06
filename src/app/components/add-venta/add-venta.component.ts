import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudVentaService } from '../../services/crud-venta.service';
import { CrudAsesorService } from 'src/app/services/crud-asesor.service';
import { CrudEstacionService } from 'src/app/services/crud-estacion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent implements OnInit {
  Asesores:any;
  Estaciones:any;
  fg:FormGroup;
  stock!:number;
  total!:number;

  constructor(
    public fb:FormBuilder, 
    private cruds:CrudVentaService,
    private crudsa:CrudAsesorService,
    private crudse:CrudEstacionService,
    private rout:Router,
    private toastr: ToastrService
  ) {
    this.fg=this.fb.group({
      asesor:[''],
      estacion:[''],
      cantidad:[''],
      total:[''],
    });
  }

  ngOnInit(): void {
    this.crudsa.getAllAsesor().subscribe(rs=>{
      //console.log(rs);
      this.Asesores=rs;
    });
    this.crudse.getAllEstacion().subscribe(rs=>{
      //console.log(rs);
      this.Estaciones=rs;
    });
  }

  submitData():any{
    //console.log("hw!");
    console.log(this.fg.value);
    console.log(this.total);
    this.fg.get('total')?.setValue(this.total);
    console.log(this.fg.value);
    this.cruds.addVenta(this.fg.value).subscribe(()=>{
      this.rout.navigateByUrl('/list-venta');
    });
    this.toastr.success("La venta se ha agregado con exito.", "Venta agregada!");
    
  }

  onChangeEvent(event: any){
    //console.log(event.target.value);
    this.total=event.target.value*5000;
  }

}
