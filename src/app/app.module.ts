import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AddAsesorComponent } from './add-asesor/add-asesor.component';
import { ListAsesorComponent } from './list-asesor/list-asesor.component';
import { EditAsesorComponent } from './edit-asesor/edit-asesor.component';
import { AddEstacionComponent } from './components/add-estacion/add-estacion.component';
import { ListEstacionComponent } from './components/list-estacion/list-estacion.component';
import { EditEstacionComponent } from './components/edit-estacion/edit-estacion.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddAsesorComponent,
    ListAsesorComponent,
    EditAsesorComponent,
    AddEstacionComponent,
    ListEstacionComponent,
    EditEstacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
