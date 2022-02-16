import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePetsPage } from './profile-pets.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePetsPageRoutingModule {}
