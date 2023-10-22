import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregaruPageRoutingModule } from './agregaru-routing.module';

import { AgregaruPage } from './agregaru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregaruPageRoutingModule
  ],
  declarations: [AgregaruPage]
})
export class AgregaruPageModule {}
