import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { SettingsRoutingModule } from './settings-routing.module';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { SocialMediaSettingComponent } from './social-media-setting/social-media-setting.component';
import { ReadingSettingComponent } from './reading-setting/reading-setting.component';


@NgModule({
  declarations: [GeneralSettingComponent, SocialMediaSettingComponent, ReadingSettingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgSelectModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
