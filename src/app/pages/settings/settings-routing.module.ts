import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { SocialMediaSettingComponent } from './social-media-setting/social-media-setting.component';
import { ReadingSettingComponent } from './reading-setting/reading-setting.component';

const routes: Routes = [
  {
    path: 'settings/general-setting',
    component: GeneralSettingComponent
  },
  {
    path: 'settings/social-media-setting',
    component: SocialMediaSettingComponent
  },
  {
    path: 'settings/reading-setting',
    component: ReadingSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
