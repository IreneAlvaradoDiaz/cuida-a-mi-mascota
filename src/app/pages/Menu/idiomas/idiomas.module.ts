import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdiomasPageRoutingModule } from './idiomas-routing.module';

import { IdiomasPage } from './idiomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdiomasPageRoutingModule
  ],
  declarations: [IdiomasPage]
})
export class IdiomasPageModule {}
