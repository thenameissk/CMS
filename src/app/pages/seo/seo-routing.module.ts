import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitlesComponent } from './titles/titles.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { SocialnetworkComponent } from './socialnetwork/socialnetwork.component';
import { AdvancedComponent } from './advanced/advanced.component';

const routes: Routes = [
  {
    path: 'seo/titles',
    component: TitlesComponent
  },
  {
    path: 'seo/sitemap',
    component: SitemapComponent
  },
  {
    path: 'seo/socialnetworks',
    component: SocialnetworkComponent
  },
  {
    path: 'seo/advanced',
    component: AdvancedComponent
  },
  { path: 'schemas', loadChildren: () => import('./schemas/schemas.module').then(m => m.SchemasModule)},
  { path: 'links', loadChildren: () => import('./links/links.module').then(m => m.LinksModule)},
  { path: 'link-types', loadChildren: () => import('./link-types/link-types.module').then(m => m.LinkTypesModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoRoutingModule { }
