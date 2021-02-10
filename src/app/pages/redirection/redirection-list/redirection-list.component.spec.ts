import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectionListComponent } from './redirection-list.component';

describe('RedirectionListComponent', () => {
  let component: RedirectionListComponent;
  let fixture: ComponentFixture<RedirectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
