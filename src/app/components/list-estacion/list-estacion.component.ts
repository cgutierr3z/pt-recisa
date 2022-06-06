import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudEstacionService } from 'src/app/services/crud-estacion.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-estacion',
  templateUrl: './list-estacion.component.html',
  styleUrls: ['./list-estacion.component.css']
})
export class ListEstacionComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  Estaciones:any;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private cruds:CrudEstacionService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };
    this.cruds.getAllEstacion().subscribe(rs=>{
      //console.log(rs);
      this.Estaciones=rs;
      this.dtTrigger.next(void 0);
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  delEstacion(id:any,i:any){
    //console.log(id,i);
    if(window.confirm("¿Desea borrar la estacion?")){
      this.cruds.delEstacion(id).subscribe(rs=>{
        this.Estaciones.splice(i,1);
        this.toastr.success("La estacion se ha eliminado con exito.", "Estacion eliminada!");
      });
    }
  }

}
