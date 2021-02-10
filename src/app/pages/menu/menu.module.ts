import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuAddComponent } from './menu-add/menu-add.component';


@NgModule({
  declarations: [MenuListComponent, MenuAddComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
