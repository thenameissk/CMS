import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSettingComponent } from './social-media-setting.component';

describe('SocialMediaSettingComponent', () => {
  let component: SocialMediaSettingComponent;
  let fixture: ComponentFixture<SocialMediaSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
