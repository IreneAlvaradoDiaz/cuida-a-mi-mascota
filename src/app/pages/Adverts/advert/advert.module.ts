import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertPageRoutingModule } from './advert-routing.module';

import { AdvertPage } from './advert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertPageRoutingModule
  ],
  declarations: [AdvertPage]
})
export class AdvertPageModule {}
