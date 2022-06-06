import { Component, OnInit } from '@angular/core';
import { CrudEstacionService } from 'src/app/services/crud-estacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-estacion',
  templateUrl: './list-estacion.component.html',
  styleUrls: ['./list-estacion.component.css']
})
export class ListEstacionComponent implements OnInit {

  Estaciones:any;
  constructor(
    private cruds:CrudEstacionService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cruds.getAllEstacion().subscribe(rs=>{
      //console.log(rs);
      this.Estaciones=rs;
    });
    
  }

  delEstacion(id:any,i:any){
    console.log(id,i);
    if(window.confirm("¿Desea borrar la estacion?")){
      this.cruds.delEstacion(id).subscribe(rs=>{
        this.Estaciones.splice(i);
        this.toastr.success("La estacion se ha eliminado con exito.", "Estacion eliminada!");
      });
    }
    
      
  }

}
