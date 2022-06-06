import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAsesorComponent } from './add-asesor/add-asesor.component';
import { EditAsesorComponent } from './edit-asesor/edit-asesor.component';
import { ListAsesorComponent } from './list-asesor/list-asesor.component';
import { AddEstacionComponent } from './components/add-estacion/add-estacion.component';
import { ListEstacionComponent } from './components/list-estacion/list-estacion.component';
import { EditEstacionComponent } from './components/edit-estacion/edit-estacion.component'
import { ListVentaComponent } from './components/list-venta/list-venta.component';
import { AddVentaComponent } from './components/add-venta/add-venta.component';


const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'list-asesor'},
  {path: 'list-asesor', component: ListAsesorComponent},
  {path: 'add-asesor', component: AddAsesorComponent},
  {path: 'edit-asesor/:id', component: EditAsesorComponent},
  {path: 'list-estacion', component: ListEstacionComponent},
  {path: 'add-estacion', component: AddEstacionComponent},
  {path: 'edit-estacion/:id', component: EditEstacionComponent},
  {path: 'list-venta', component: ListVentaComponent},
  {path: 'add-venta', component: AddVentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
