import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsInfoPageRoutingModule } from './adverts-info-routing.module';

import { AdvertsInfoPage } from './adverts-info.page';
import { ComponentsModule } from 'src/app/components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AdvertsInfoPageRoutingModule
  ],
  declarations: [AdvertsInfoPage]
})
export class AdvertsInfoPageModule {}
