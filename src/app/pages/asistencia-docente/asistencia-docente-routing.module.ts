import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaDocentePage } from './asistencia-docente.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaDocentePageRoutingModule {}
