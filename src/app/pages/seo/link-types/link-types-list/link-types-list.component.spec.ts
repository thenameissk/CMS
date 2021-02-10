import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTypesListComponent } from './link-types-list.component';

describe('LinkTypesListComponent', () => {
  let component: LinkTypesListComponent;
  let fixture: ComponentFixture<LinkTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
