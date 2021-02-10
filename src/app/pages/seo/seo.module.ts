import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbDropdownModule, NgbTabsetModule, NgbPaginationModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
import { UiSwitchModule } from 'ngx-ui-switch';
import { SchemasModule } from './schemas/schemas.module';
import { LinksModule } from './links/links.module';
import { LinkTypesModule } from './link-types/link-types.module';

import { SeoRoutingModule } from './seo-routing.module';
import { TitlesComponent } from './titles/titles.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { SocialnetworkComponent } from './socialnetwork/socialnetwork.component';
import { AdvancedComponent } from './advanced/advanced.component';



@NgModule({
  declarations: [TitlesComponent, SitemapComponent, SocialnetworkComponent, AdvancedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgSelectModule,
    NgbDropdownModule,
    NgbTabsetModule,
    NgbPaginationModule,
    NgbCollapseModule,
    NgxEditorModule,
    UiSwitchModule,
    SchemasModule,
    LinksModule,
    LinkTypesModule,
    SeoRoutingModule
  ]
})
export class SeoModule { }
