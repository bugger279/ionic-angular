import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialTestPageRoutingModule } from './social-test-routing.module';

import { SocialTestPage } from './social-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialTestPageRoutingModule
  ],
  declarations: [SocialTestPage]
})
export class SocialTestPageModule {}
