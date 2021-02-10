import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard'},
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'tags', loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule) },
  { path: 'media', loadChildren: () => import('./media/media.module').then(m => m.MediaModule) },
  { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'php-code', loadChildren: () => import('./php-code/php-code.module').then(m => m.PhpCodeModule) },
  { path: 'redirection', loadChildren: () => import('./redirection/redirection.module').then(m => m.RedirectionModule)},
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
  { path: 'seo', loadChildren: () => import('./seo/seo.module').then(m => m.SeoModule)},
  { path: 'pages', loadChildren: () => import('./page/page.module').then(m => m.PageModule)},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)},

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
