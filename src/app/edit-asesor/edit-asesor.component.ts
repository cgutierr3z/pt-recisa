import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudAsesorService } from '../services/crud-asesor.service';

@Component({
  selector: 'app-edit-asesor',
  templateUrl: './edit-asesor.component.html',
  styleUrls: ['./edit-asesor.component.css']
})
export class EditAsesorComponent implements OnInit {
  fg:FormGroup;
  id:any;
  asesor:any;

  constructor(
    private ar:ActivatedRoute, 
    private cruds:CrudAsesorService,
    public fb:FormBuilder,
    private rout:Router
  ) {
    this.id=this.ar.snapshot.paramMap.get('id');
    //console.log(this.id);

    this.cruds.getAsesor(this.id).subscribe(rs=>{
      //console.log(rs);
      this.asesor=rs;
      //console.log(this.asesor);
      this.fg.setValue({
        nombre:this.asesor[0]['nombre'],
        apellido:this.asesor[0]['apellido']
      });
    });

    this.fg=this.fb.group({
      nombre:[''],
      apellido:['']
    });

  }


  ngOnInit(): void {
    
  }

  submitData():any{
    //console.log("hw!");
    console.log(this.id);
    console.log(this.fg.value);
    this.cruds.editAsesor(this.id,this.fg.value).subscribe(()=>{
      this.rout.navigateByUrl('/list-asesor');
    });
    //this.rout.navigateByUrl('/list-asesor');
  }

}
