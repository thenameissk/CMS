import { Component, OnInit } from '@angular/core';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';


@Component({
  selector: 'app-media-add',
  templateUrl: './media-add.component.html',
  styleUrls: ['./media-add.component.scss']
})
export class MediaAddComponent implements OnInit {
  // public fileUploadControl = new FileUploadControl(FileUploadValidators.filesLimit(1));
  constructor() { }


  ngOnInit(): void {
  }

  files: File[] = [];
 
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
   
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }



}
