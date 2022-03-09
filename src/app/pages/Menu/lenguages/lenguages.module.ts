import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LenguagesPageRoutingModule } from './lenguages-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LenguagesPage } from './lenguages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LenguagesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [LenguagesPage]
})
export class LenguagesPageModule {}
