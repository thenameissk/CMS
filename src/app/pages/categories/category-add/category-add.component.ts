import { Component, OnInit,  ViewChild, EventEmitter, Output, Input } from '@angular/core';

import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  @ViewChild('dp', {static: true}) datePicker: any;
  // Parent Category
  parentCategory: string[];

  

  constructor(calendar: NgbCalendar) { }

  ngOnInit() {
    
    this.parentCategory = ['SEO', 'Branding', 'Digital Marketing']
    

  }

}
