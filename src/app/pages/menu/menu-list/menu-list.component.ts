import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormControl,  FormBuilder,  Validators} from "@angular/forms";
import { DataTableDirective } from 'angular-datatables/'

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

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
          title:'Footer',
          status:'1',
      },
      {
          title:'Header',
          status:'0',
      },
      {
          title:'Services',
          status:'1',
      },
      {
          title:'Sidebar',
          status:'1',
      },
    ];
  }
}
