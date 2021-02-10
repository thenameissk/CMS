import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagAddComponent } from './tag-add/tag-add.component';

const routes: Routes = [
    {
        path: 'tags',
        component: TagsListComponent
    },
    {
        
        path: 'tags/add',
        component: TagAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TagsRoutingModule { }