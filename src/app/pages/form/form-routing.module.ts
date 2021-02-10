import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsListComponent } from './forms-list/forms-list.component';
import { FormAddComponent } from './form-add/form-add.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormsListComponent
},
{
    
    path: 'forms/add',
    component: FormAddComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
