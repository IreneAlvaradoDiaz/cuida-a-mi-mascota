import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPetsPage } from './register-pets.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPetsPageRoutingModule {}
