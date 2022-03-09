import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPetsPageRoutingModule } from './register-pets-routing.module';

import { RegisterPetsPage } from './register-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPetsPageRoutingModule
  ],
  declarations: [RegisterPetsPage]
})
export class RegisterPetsPageModule {}
