import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
// import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CKEditorModule } from 'ng2-ckeditor';


import { NgbDropdownModule, NgbTabsetModule, NgbPaginationModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


import { FormRoutingModule } from './form-routing.module';

import { UIModule } from '../../shared/ui/ui.module';

import { FormsListComponent } from './forms-list/forms-list.component';
import { FormAddComponent } from './form-add/form-add.component';


@NgModule({
  declarations: [FormsListComponent, FormAddComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    // BrowserModule,
    FormsModule,
    CKEditorModule,
    NgbDropdownModule,
    NgbTabsetModule,
    NgbPaginationModule,
    NgbCollapseModule,
    FormRoutingModule,
    UIModule
  ]
})
export class FormModule { }
