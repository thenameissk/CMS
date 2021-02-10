import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { NgbDropdownModule, NgbDatepickerModule, NgbPaginationModule, NgbTypeaheadModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from '../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from 'ng2-ckeditor';
import { 
	IgxDatePickerModule,
	IgxIconModule,
	IgxInputGroupModule
 } from "igniteui-angular";


import { PageRoutingModule } from './page-routing.module';
import { PageListComponent } from './page-list/page-list.component';
import { PageAddComponent } from './page-add/page-add.component';
import { StatusPipe } from './page-list/status.pipe';


@NgModule({
  declarations: [PageListComponent, PageAddComponent, StatusPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbModalModule,
    UIModule,
    NgSelectModule,
    CKEditorModule,
    IgxDatePickerModule,
    PageRoutingModule,
    IgxIconModule,
    IgxInputGroupModule
  ],
})
export class PageModule { }
