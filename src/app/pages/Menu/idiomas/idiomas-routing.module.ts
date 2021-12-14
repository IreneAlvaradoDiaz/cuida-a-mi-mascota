import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdiomasPage } from './idiomas.page';

const routes: Routes = [
  {
    path: '',
    component: IdiomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdiomasPageRoutingModule {}
