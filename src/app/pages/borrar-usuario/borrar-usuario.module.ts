import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrarUsuarioPageRoutingModule } from './borrar-usuario-routing.module';

import { BorrarUsuarioPage } from './borrar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrarUsuarioPageRoutingModule
  ],
  declarations: [BorrarUsuarioPage]
})
export class BorrarUsuarioPageModule {}
