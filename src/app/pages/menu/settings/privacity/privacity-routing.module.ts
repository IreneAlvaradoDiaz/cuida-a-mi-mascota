import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacityPage } from './privacity.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacityPageRoutingModule {}
