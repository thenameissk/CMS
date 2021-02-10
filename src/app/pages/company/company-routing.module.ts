import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyAddComponent } from './company-add/company-add.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyListComponent
  },
  {
    path: 'company/add',
    component: CompanyAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
