import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardModule } from './dashboard/dashboard.module';
import { MenuModule } from './menu/menu.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { MediaModule } from './media/media.module';
import { FormModule } from './form/form.module';
import { PhpCodeModule } from './php-code/php-code.module';
import { RedirectionModule } from './redirection/redirection.module';
import { SettingsModule } from './settings/settings.module';
import { SeoModule } from './seo/seo.module';
import { PageModule } from './page/page.module';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';



import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbDropdownModule,
    DashboardModule,
    MenuModule,
    CategoriesModule,
    TagsModule,
    MediaModule,
    FormModule,
    PhpCodeModule,
    RedirectionModule,
    SettingsModule,
    SeoModule,
    PageModule,
    UsersModule,
    CompanyModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
