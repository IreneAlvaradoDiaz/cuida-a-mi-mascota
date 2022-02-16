import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertsInfoPage } from './adverts-info.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertsInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertsInfoPageRoutingModule {}
