import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhpCodeListComponent } from './php-code-list/php-code-list.component';
import { PhpCodeAddComponent } from './php-code-add/php-code-add.component';

const routes: Routes = [
  {
    path : 'php-code',
    component: PhpCodeListComponent
  },
  {
    path : 'php-code/add',
    component: PhpCodeAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhpCodeRoutingModule { }
