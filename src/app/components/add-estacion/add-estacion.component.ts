import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudEstacionService } from '../../services/crud-estacion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-estacion',
  templateUrl: './add-estacion.component.html',
  styleUrls: ['./add-estacion.component.css']
})
export class AddEstacionComponent implements OnInit {

  fg:FormGroup;

  constructor(
    public fb:FormBuilder, 
    private cruds:CrudEstacionService, 
    private rout:Router,
    private toastr: ToastrService
  ) {
    this.fg=this.fb.group({
      nombre:[''],
      stockTarjeta:[''],
      saldoCaja:[''],
    });
  }

  ngOnInit(): void {
  }

  submitData():any{
    //console.log("hw!");
    //console.log(this.fg.value);
    this.cruds.addEstacion(this.fg.value).subscribe(()=>{
      this.rout.navigateByUrl('/list-estacion');
    });
    this.toastr.success("La estacion se ha agregado con exito.", "Estacion agregada!");
    
  }

}
