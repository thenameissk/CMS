import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemasAddComponent } from './schemas-add.component';

describe('SchemasAddComponent', () => {
  let component: SchemasAddComponent;
  let fixture: ComponentFixture<SchemasAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemasAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
