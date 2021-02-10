import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectionListComponent } from './redirection-list/redirection-list.component';
import { RedirectionAddComponent } from './redirection-add/redirection-add.component';

const routes: Routes = [
  {
    path: 'redirection',
    component: RedirectionListComponent
  },
  {
    path: 'redirection/add',
    component: RedirectionAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedirectionRoutingModule { }
