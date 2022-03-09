import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AdvertsPageModule } from '../pages/Advert/adverts/adverts.module';
import { ComponentsModule } from '../components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AdvertsPageModule,
    ComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
