import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemasListComponent } from './schemas-list/schemas-list.component';
import { SchemasAddComponent } from './schemas-add/schemas-add.component';

const routes: Routes = [
  {
    path:'seo/schemas',
    component: SchemasListComponent
  },
  {
    path:'seo/schemas/add',
    component: SchemasAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemasRoutingModule { }
