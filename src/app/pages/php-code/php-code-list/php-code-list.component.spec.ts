import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpCodeListComponent } from './php-code-list.component';

describe('PhpCodeListComponent', () => {
  let component: PhpCodeListComponent;
  let fixture: ComponentFixture<PhpCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpCodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
