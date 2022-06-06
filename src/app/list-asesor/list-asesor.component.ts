import { Component, OnInit } from '@angular/core';
import { CrudAsesorService } from '../services/crud-asesor.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-asesor',
  templateUrl: './list-asesor.component.html',
  styleUrls: ['./list-asesor.component.css']
})
export class ListAsesorComponent implements OnInit {
  Asesores:any;
  constructor(
    private cruds:CrudAsesorService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cruds.getAllAsesor().subscribe(rs=>{
      //console.log(rs);
      this.Asesores=rs;
    });
    
  }

  delAsesor(id:any,i:any){
    console.log(id,i);
    if(window.confirm("¿Desea borrar el asesor?")){
      this.cruds.delAsesor(id).subscribe(rs=>{
        this.Asesores.splice(i,1);
        this.toastr.success("El asesor se ha eliminado con exito.", "Asesor eliminado!");
      });
    }
    
      
  }
  
}
