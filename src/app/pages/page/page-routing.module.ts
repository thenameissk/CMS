import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageListComponent } from './page-list/page-list.component';
import { PageAddComponent } from './page-add/page-add.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PageListComponent
  },
  {
    path: 'pages/add',
    component: PageAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
