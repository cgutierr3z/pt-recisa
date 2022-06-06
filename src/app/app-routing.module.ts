import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAsesorComponent } from './add-asesor/add-asesor.component';
import { EditAsesorComponent } from './edit-asesor/edit-asesor.component';
import { ListAsesorComponent } from './list-asesor/list-asesor.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'list-asesor'},
  {path: 'list-asesor', component: ListAsesorComponent},
  {path: 'add-asesor', component: AddAsesorComponent},
  {path: 'edit-asesor/:id', component: EditAsesorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
