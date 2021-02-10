import { Component, OnInit ,  ViewChild, EventEmitter, Output, Input  } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-redirection-add',
  templateUrl: './redirection-add.component.html',
  styleUrls: ['./redirection-add.component.scss']
})
export class RedirectionAddComponent implements OnInit {

  @ViewChild('dp', {static: true}) datePicker: any;
  // Parent Category
  type: string[];

  

  constructor(calendar: NgbCalendar) { }

  ngOnInit() {
    
    this.type = ['301 Move Permanently', '302 Found / Moved Temporarily', '307 Moved Temporarily', '410 Gone', '451 Unavailable For Legal Reasons']
    

  }

}