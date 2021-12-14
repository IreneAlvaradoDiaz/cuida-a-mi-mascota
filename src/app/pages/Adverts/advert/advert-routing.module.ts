import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertPage } from './advert.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertPageRoutingModule {}
