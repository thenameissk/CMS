import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpCodeAddComponent } from './php-code-add.component';

describe('PhpCodeAddComponent', () => {
  let component: PhpCodeAddComponent;
  let fixture: ComponentFixture<PhpCodeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpCodeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpCodeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
