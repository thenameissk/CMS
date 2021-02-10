import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LinkTypesListComponent } from './link-types-list/link-types-list.component';
import { LinkTypeAddComponent } from './link-type-add/link-type-add.component';

const routes: Routes = [
  {
    path: 'seo/link-types',
    component: LinkTypesListComponent
  },
  {
    path: 'seo/link-types/add',
    component: LinkTypeAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkTypesRoutingModule { }
