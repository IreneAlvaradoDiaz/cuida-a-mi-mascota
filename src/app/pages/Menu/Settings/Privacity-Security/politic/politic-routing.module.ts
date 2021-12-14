import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticPage } from './politic.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticPageRoutingModule {}
