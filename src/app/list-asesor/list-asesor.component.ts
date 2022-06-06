import { Component, OnInit } from '@angular/core';
import { CrudAsesorService } from '../services/crud-asesor.service';


@Component({
  selector: 'app-list-asesor',
  templateUrl: './list-asesor.component.html',
  styleUrls: ['./list-asesor.component.css']
})
export class ListAsesorComponent implements OnInit {
  Asesores:any;
  constructor(private cruds:CrudAsesorService) { }

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
        this.Asesores.splice(i);
      });
    }
      
  }
  
}
