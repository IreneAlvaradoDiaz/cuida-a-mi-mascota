import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertsPage } from './adverts.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertsPage
  },
  {
    path: 'more',
    loadChildren: () => import('../more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'adverts-info',
    loadChildren: () => import('../adverts-info/adverts-info.module').then( m => m.AdvertsInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertsPageRoutingModule {}
