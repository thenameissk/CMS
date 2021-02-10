import { Component, OnInit,  ViewChild, EventEmitter, Output, Input } from '@angular/core';

import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  @ViewChild('dp', {static: true}) datePicker: any;

  // Type 
  type: string[];

  // Page Type
  page: string[];

  

  constructor(calendar: NgbCalendar) { }

  ngOnInit(): void {

    this.type = ['xml', 'html'];
    this.page = ['Blog', 'Page', 'Testimonial', 'Project', 'Form']

  }

}
