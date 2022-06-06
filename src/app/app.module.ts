import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAsesorComponent } from './add-asesor/add-asesor.component';
import { ListAsesorComponent } from './list-asesor/list-asesor.component';
import { EditAsesorComponent } from './edit-asesor/edit-asesor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAsesorComponent,
    ListAsesorComponent,
    EditAsesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
