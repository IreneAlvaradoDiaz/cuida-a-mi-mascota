import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaysPageRoutingModule } from './pays-routing.module';

import { PaysPage } from './pays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaysPageRoutingModule
  ],
  declarations: [PaysPage]
})
export class PaysPageModule {}
