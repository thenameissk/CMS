import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormControl,  FormBuilder,  Validators} from "@angular/forms";
import { DataTableDirective } from 'angular-datatables/'

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {

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
          title:'Contact Form',
          status:'1',
      },
      {
          title:'Footer newsletter',
          status:'0',
      },
    ];
  }
}
