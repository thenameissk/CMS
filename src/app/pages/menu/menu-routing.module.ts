import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuAddComponent } from './menu-add/menu-add.component';

const routes: Routes = [
{
path: 'menu',
component: MenuListComponent
},
{
  path: 'menu/add',
  component: MenuAddComponent
  },

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MenuRoutingModule { }
