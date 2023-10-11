import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaDocentePageRoutingModule } from './asistencia-docente-routing.module';

import { AsistenciaDocentePage } from './asistencia-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaDocentePageRoutingModule
  ],
  declarations: [AsistenciaDocentePage]
})
export class AsistenciaDocentePageModule {}
