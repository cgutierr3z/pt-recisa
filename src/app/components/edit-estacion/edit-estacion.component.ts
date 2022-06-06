import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudEstacionService } from '../../services/crud-estacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-estacion',
  templateUrl: './edit-estacion.component.html',
  styleUrls: ['./edit-estacion.component.css']
})
export class EditEstacionComponent implements OnInit {

  fg:FormGroup;
  id:any;
  estacion:any;

  constructor(
    private ar:ActivatedRoute, 
    private cruds:CrudEstacionService,
    public fb:FormBuilder,
    private rout:Router,
    private toastr: ToastrService
  ) {
    this.id=this.ar.snapshot.paramMap.get('id');
    //console.log(this.id);

    this.cruds.getEstacion(this.id).subscribe(rs=>{
      //console.log(rs);
      this.estacion=rs;
      //console.log(this.estacion);
      this.fg.setValue({
        nombre:this.estacion[0]['nombre'],
        stockTarjeta:this.estacion[0]['stock_tarjeta'],
        saldoCaja:this.estacion[0]['saldo_caja']
      });
    });

    this.fg=this.fb.group({
      nombre:[''],
      stockTarjeta:[''],
      saldoCaja:['']
    });

  }


  ngOnInit(): void {
    
  }

  submitData():any{
    //console.log("hw!");
    console.log(this.id);
    console.log(this.fg.value);
    this.cruds.editEstacion(this.id,this.fg.value).subscribe(()=>{
      this.rout.navigateByUrl('/list-estacion');
      this.toastr.success("La estacion se ha editado con exito.", "Estaion editada!");
    });
    //this.rout.navigateByUrl('/list-asesor');
    
  }

}
