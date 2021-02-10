import { Component, OnInit,  ViewChild, EventEmitter, Output, Input } from '@angular/core';

import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schemas-add',
  templateUrl: './schemas-add.component.html',
  styleUrls: ['./schemas-add.component.scss']
})
export class SchemasAddComponent implements OnInit {

  @ViewChild('dp', {static: true}) datePicker: any;

  // Type 
  type: string[];

  // Page Type
  page: string[];

  

  constructor(calendar: NgbCalendar) { }

  ngOnInit(): void {

    this.type = ['About', 'Home', 'Services', 'Contact', 'Branding', 'Digital Marketing', 'SEO', 'Web Design', 'Graphic Design', 'App Development'];
    this.page = ['None', 'Article', 'Local Business', 'FAQ', 'Course']

  }

}
