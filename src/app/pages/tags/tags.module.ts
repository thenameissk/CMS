import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { TagsRoutingModule } from './tags-routing.module'
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagAddComponent } from './tag-add/tag-add.component';



@NgModule({
  declarations: [TagsListComponent, TagAddComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    TagsRoutingModule
  ]
})
export class TagsModule { }
