import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSelectionPage } from './register-selection.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSelectionPageRoutingModule {}
