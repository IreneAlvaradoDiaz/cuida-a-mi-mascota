import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayTogglePage } from './pay-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: PayTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayTogglePageRoutingModule {}
