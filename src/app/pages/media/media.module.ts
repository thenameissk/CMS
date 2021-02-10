import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgxDropzoneModule } from 'ngx-dropzone';


import { MediaRoutingModule } from './media-routing.module';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaAddComponent } from './media-add/media-add.component';



@NgModule({
  declarations: [MediaListComponent, MediaAddComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    // BrowserAnimationsModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
