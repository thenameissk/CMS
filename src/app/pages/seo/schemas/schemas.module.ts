import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { SchemasRoutingModule } from './schemas-routing.module';
import { SchemasListComponent } from './schemas-list/schemas-list.component';
import { SchemasAddComponent } from './schemas-add/schemas-add.component';


@NgModule({
  declarations: [SchemasListComponent, SchemasAddComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgSelectModule,
    SchemasRoutingModule
  ]
})
export class SchemasModule { }
