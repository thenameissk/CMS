import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';

const routes: Routes = [
    {
        path: 'categories',
        component: CategoriesListComponent
    },
    {
        
        path: 'categories/add',
        component: CategoryAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CategoriesRoutingModule { }