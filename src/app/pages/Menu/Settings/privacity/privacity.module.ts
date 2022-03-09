import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacityPageRoutingModule } from './privacity-routing.module';

import { PrivacityPage } from './privacity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacityPageRoutingModule
  ],
  declarations: [PrivacityPage]
})
export class PrivacityPageModule {}
