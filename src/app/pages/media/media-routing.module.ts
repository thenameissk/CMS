import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaListComponent } from './media-list/media-list.component';
import { MediaAddComponent } from './media-add/media-add.component';

const routes: Routes = [
  {
    path: 'media',
    component: MediaListComponent
},
{
    
    path: 'media/add',
    component: MediaAddComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
