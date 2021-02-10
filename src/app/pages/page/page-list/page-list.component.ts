import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {  FormGroup,  FormControl,  FormBuilder,  Validators} from "@angular/forms";
import { StatusPipe } from './status.pipe'


import { DataTableDirective } from 'angular-datatables/'





@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
 
})



export class PageListComponent implements OnInit {

    
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
   
   ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [10, 25, 50],
      processing: true
    };
  

 
  this.dataType = {
    title: "string",
    pagetype: "string",
    pagelink: "string",
    status: "string",
  };

  this.tableData = [
    {
        title:'Home',
        pagetype:'PAGE',
        pagelink:'https://www.yashaaglobal.com/',
        status:'1',
    },
    {
        title:'About Us',
        pagetype:'PAGE',
        pagelink:'https://www.yashaaglobal.com/aboutus',
        status:'0',
    },
    {
        title:'How to pick the Web Development Company',
        pagetype:'BLOG',
        pagelink:'https://www.yashaaglobal.com/blog/how-to-pick-the-web-development-company',
        status:'1',
    },
    {
        title:'Services',
        pagetype:'PAGE',
        pagelink:'https://www.yashaaglobal.com/services',
        status:'0',
    },
];
   }

    

   

}