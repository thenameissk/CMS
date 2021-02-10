import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { NgbDate, NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-page-add',
  templateUrl: './page-add.component.html',
  styleUrls: ['./page-add.component.scss']
})
export class PageAddComponent implements OnInit {

  

  // Form
  pageForm = this.fb.group({
    file: [null],
    customfields: this.fb.array([

    ])
  });

  // File Upload
  @ViewChild("fileInput") el: ElementRef;
  imageUrl: any =
    "assets/images/app/placeholder-image.png";
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.pageForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl =
      "assets/images/app/placeholder-image.png";
    this.editFile = true;
    this.removeUpload = false;
    this.pageForm.patchValue({
      file: [null]
    });
  }

  // Date Picker
  hoveredDate: NgbDate;
  fromNGDate: NgbDate;
  toNGDate: NgbDate;

  @ViewChild('dp', {static: true}) datePicker: any;

  // Parent Category
  pagetypeCategory: string[];
  categories: string[];
  tags: string[];
  status: string[];
  parentPage: string[];
  customfieldName: string[];

  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';

  @ViewChild("myckeditor") ckeditor: any;

  constructor(public fb: FormBuilder, private cd: ChangeDetectorRef, private modalService: NgbModal)  { 
    this.mycontent = `<p>My html content</p>`;
  }

  ngOnInit() {
    this.pagetypeCategory = ['Page', 'Blog', 'Project', 'Testimonial', 'Form'],
    this.parentPage = ['Home', 'About Us', 'Services', 'Contact Us'],
    this.categories = ['Branding', 'Digital Marketing', 'SEO', 'Web Design', 'Graphic Design'],
    this.tags = ['Branding', 'Digital Marketing', 'SEO', 'Web Design', 'Graphic Design'],
    this.status= ['Active', 'Inactive'],
    this.customfieldName= ['Summary', 'Content']

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };


  }

  



  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }

  onSubmit(){

  }


  // Custom Fields

  get customfields()
    {
      return this.pageForm.get('customfields') as FormArray;
    }

  addNewField()
  {
    this.customfields.push(this.fb.control(''));
  }

  removeField(index)
  {
    this.customfields.removeAt(index);
  }

  /**
   * Custom Field Name modal open
   * @param customFieldNameData responsive modal data
   */
  customFieldName(customFieldNameData: string) {
    this.modalService.open(customFieldNameData);
  }
  

  

}
