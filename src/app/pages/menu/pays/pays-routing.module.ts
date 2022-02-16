import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaysPage } from './pays.page';

const routes: Routes = [
  {
    path: '',
    component: PaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaysPageRoutingModule {}
