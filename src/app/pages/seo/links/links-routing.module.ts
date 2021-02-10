import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LinksListComponent } from './links-list/links-list.component';
import { LinkAddComponent } from './link-add/link-add.component';

const routes: Routes = [
  {
    path: 'seo/links',
    component: LinksListComponent
  },
  {
    path: 'seo/links/add',
    component: LinkAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
