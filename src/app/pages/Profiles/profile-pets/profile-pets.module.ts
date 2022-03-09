import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePetsPageRoutingModule } from './profile-pets-routing.module';

import { ProfilePetsPage } from './profile-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePetsPageRoutingModule
  ],
  declarations: [ProfilePetsPage]
})
export class ProfilePetsPageModule {}
