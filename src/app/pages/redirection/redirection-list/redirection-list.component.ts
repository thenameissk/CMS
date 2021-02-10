import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormControl,  FormBuilder,  Validators} from "@angular/forms";
import { DataTableDirective } from 'angular-datatables/'

@Component({
  selector: 'app-redirection-list',
  templateUrl: './redirection-list.component.html',
  styleUrls: ['./redirection-list.component.scss']
})
export class RedirectionListComponent implements OnInit {

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
      oldlink: "string",
      type: "string",
      newlink: "string",
      ip: "string",
      device: "string",
      city: "string",
      country: "string",
      status: "string",
    };

    this.tableData = [
      {
          oldlink:'https://www.yashaaglobal.com/yashaaglobal-unsubscription',
          type:'301 Move Permanently',
          newlink:'https://www.yashaaglobal.com/blog/your-brand-is-your-companys-story/',
          ip:'188.40.248.107',
          device:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
          city:'Berlin',
          country:'DE',
          status:'1',
      },
      {
        oldlink:'https://www.yashaaglobal.com/yashaaglobal-unsubscription',
        type:'301 Move Permanently',
        newlink:'https://www.yashaaglobal.com/blog/your-brand-is-your-companys-story/',
        ip:'188.40.248.107',
        device:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
        city:'Berlin',
        country:'DE',
        status:'1',
      },
    ];
  }
}
