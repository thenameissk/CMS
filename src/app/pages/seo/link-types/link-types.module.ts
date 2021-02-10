import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkTypesRoutingModule } from './link-types-routing.module';
import { LinkTypesListComponent } from './link-types-list/link-types-list.component';
import { LinkTypeAddComponent } from './link-type-add/link-type-add.component';


@NgModule({
  declarations: [LinkTypesListComponent, LinkTypeAddComponent],
  imports: [
    CommonModule,
    LinkTypesRoutingModule
  ]
})
export class LinkTypesModule { }
