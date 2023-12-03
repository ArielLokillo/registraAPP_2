import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDocentePageRoutingModule } from './login-docente-routing.module';

import { LoginDocentePage } from './login-docente.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDocentePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [LoginDocentePage]
})
export class LoginDocentePageModule {}
