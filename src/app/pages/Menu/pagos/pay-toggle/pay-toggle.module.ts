import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayTogglePageRoutingModule } from './pay-toggle-routing.module';

import { PayTogglePage } from './pay-toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayTogglePageRoutingModule
  ],
  declarations: [PayTogglePage]
})
export class PayTogglePageModule {}
