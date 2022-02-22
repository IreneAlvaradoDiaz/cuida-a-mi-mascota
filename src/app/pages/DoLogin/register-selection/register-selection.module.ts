import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSelectionPageRoutingModule } from './register-selection-routing.module';

import { RegisterSelectionPage } from './register-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterSelectionPageRoutingModule
  ],
  declarations: [RegisterSelectionPage]
})
export class RegisterSelectionPageModule {}
