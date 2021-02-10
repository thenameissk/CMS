import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormControl,  FormBuilder,  Validators} from "@angular/forms";
import { DataTableDirective } from 'angular-datatables/'

@Component({
  selector: 'app-php-code-list',
  templateUrl: './php-code-list.component.html',
  styleUrls: ['./php-code-list.component.scss']
})
export class PhpCodeListComponent implements OnInit {

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
      shortcode: "string",
      status: "string",
    };

    this.tableData = [
      {
          title:'Anchor',
          shortcode:'[PHPCODE_Anchor-4]',
          status:'1',
      },
      {
          title:'Base Url',
          shortcode:'[PHPCODE_base url-13]',
          status:'0',
      },
    ];
  }
}
