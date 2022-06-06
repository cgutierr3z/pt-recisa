import { Component, OnInit } from '@angular/core';
import { CrudVentaService } from 'src/app/services/crud-venta.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.css']
})
export class ListVentaComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  Ventas:any;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private cruds:CrudVentaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };
    this.cruds.getAllVenta().subscribe(rs=>{
      //console.log(rs);
      this.Ventas=rs;
      this.dtTrigger.next(void 0);
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  delVenta(id:any,i:any){
    //console.log(id,i);
    if(window.confirm("¿Desea borrar la venta?")){
      this.cruds.delVenta(id).subscribe(rs=>{
        this.Ventas.splice(i,1);
        this.toastr.success("La venta se ha eliminado con exito.", "Venta eliminada!");
        this.toastr.info("El stock y el saldo de caja se han restaurado", "Estacion actualizada!");
      });
    }
  }

}
