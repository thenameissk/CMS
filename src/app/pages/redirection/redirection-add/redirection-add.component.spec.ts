import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectionAddComponent } from './redirection-add.component';

describe('RedirectionAddComponent', () => {
  let component: RedirectionAddComponent;
  let fixture: ComponentFixture<RedirectionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
