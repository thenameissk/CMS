import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingSettingComponent } from './reading-setting.component';

describe('ReadingSettingComponent', () => {
  let component: ReadingSettingComponent;
  let fixture: ComponentFixture<ReadingSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
