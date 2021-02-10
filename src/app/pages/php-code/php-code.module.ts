import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { PhpCodeRoutingModule } from './php-code-routing.module';

import { PhpCodeListComponent } from './php-code-list/php-code-list.component';
import { PhpCodeAddComponent } from './php-code-add/php-code-add.component';


@NgModule({
  declarations: [PhpCodeListComponent, PhpCodeAddComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    PhpCodeRoutingModule
  ]
})
export class PhpCodeModule { }
