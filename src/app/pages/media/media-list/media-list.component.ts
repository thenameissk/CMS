import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormControl,  FormBuilder,  Validators} from "@angular/forms";
import { DataTableDirective } from 'angular-datatables/'

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  dataType: any;
  tableData: Array<any>;


    dtOptions: any = {};
    isChecked = false;
    checkuncheckall()
    {
    if(this.isChecked == true)
    {
    this.isChecked = false;
    }
    else
    {
    this.isChecked = true;
    }
    
    }

  constructor() { }

  ngOnInit(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [10, 25, 50],
      processing: true
    };

    this.dataType = {
      title: "string",
      status: "string",
    };

    this.tableData = [
      {
          title:'img-3.jpg',
          link:'assets/images/small/img-3.jpg',
          status:'1',
      },
      {
          title:'img-1.jpg',
          link:'assets/images/small/img-1.jpg',
          status:'0',
      },
      {
          title:'img-2.jpg',
          link:'assets/images/small/img-2.jpg',
          status:'1',
      },
      {
          title:'img-4.jpg',
          link:'assets/images/small/img-4.jpg',
          status:'1',
      },
    ];
  }
}
