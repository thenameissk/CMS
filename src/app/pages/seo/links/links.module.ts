import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksListComponent } from './links-list/links-list.component';
import { LinkAddComponent } from './link-add/link-add.component';


@NgModule({
  declarations: [LinksListComponent, LinkAddComponent],
  imports: [
    CommonModule,
    LinksRoutingModule
  ]
})
export class LinksModule { }
