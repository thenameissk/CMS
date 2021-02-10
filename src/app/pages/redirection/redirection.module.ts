import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';


import { RedirectionRoutingModule } from './redirection-routing.module';
import { RedirectionListComponent } from './redirection-list/redirection-list.component';
import { RedirectionAddComponent } from './redirection-add/redirection-add.component';


@NgModule({
  declarations: [RedirectionListComponent, RedirectionAddComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgSelectModule,
    RedirectionRoutingModule
  ]
})
export class RedirectionModule { }
