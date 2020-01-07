import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialTestPage } from './social-test.page';

const routes: Routes = [
  {
    path: '',
    component: SocialTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialTestPageRoutingModule {}
