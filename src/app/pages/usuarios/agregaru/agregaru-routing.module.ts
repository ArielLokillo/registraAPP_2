import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregaruPage } from './agregaru.page';

const routes: Routes = [
  {
    path: '',
    component: AgregaruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregaruPageRoutingModule {}
