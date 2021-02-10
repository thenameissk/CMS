import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTypeAddComponent } from './link-type-add.component';

describe('LinkTypeAddComponent', () => {
  let component: LinkTypeAddComponent;
  let fixture: ComponentFixture<LinkTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkTypeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
