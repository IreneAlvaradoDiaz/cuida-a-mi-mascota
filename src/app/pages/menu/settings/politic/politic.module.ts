import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticPageRoutingModule } from './politic-routing.module';

import { PoliticPage } from './politic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticPageRoutingModule
  ],
  declarations: [PoliticPage]
})
export class PoliticPageModule {}
