import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';


import { CategoriesRoutingModule } from './categories-routing.module'



import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';



@NgModule({

  declarations: [CategoriesListComponent, CategoryAddComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    CategoriesRoutingModule,
    NgSelectModule,
    FormsModule,
    UIModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
