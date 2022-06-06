import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CrudAsesorService } from '../services/crud-asesor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-asesor',
  templateUrl: './add-asesor.component.html',
  styleUrls: ['./add-asesor.component.css']
})
export class AddAsesorComponent implements OnInit {
  fg:FormGroup;

  constructor(
    public fb:FormBuilder, 
    private cruds:CrudAsesorService, 
    private rout:Router,
    private toastr: ToastrService
  ) {
    this.fg=this.fb.group({
      nombre:[''],
      apellido:['']
    });
  }

  ngOnInit(): void {
  }

  submitData():any{
    //console.log("hw!");
    //console.log(this.fg.value);
    this.cruds.addAsesor(this.fg.value).subscribe(()=>{
      this.rout.navigateByUrl('/list-asesor');
    });
    this.toastr.success("El asesor se ha agregado con exito.", "Asesor agregado!");
    
  }

}
