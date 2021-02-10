import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormControl,  FormBuilder,  Validators} from "@angular/forms";
import { DataTableDirective } from 'angular-datatables/'

@Component({
  selector: 'app-schemas-list',
  templateUrl: './schemas-list.component.html',
  styleUrls: ['./schemas-list.component.scss']
})
export class SchemasListComponent implements OnInit {

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
      {   type: 'localbusiness',
          title:'Home',
          status:'1',
      },
      {   
          type: 'localbusiness',
          title:'About Us',
          status:'0',
      },
    ];
  }
}
