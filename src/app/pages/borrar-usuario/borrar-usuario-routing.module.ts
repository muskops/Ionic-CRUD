import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrarUsuarioPage } from './borrar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: BorrarUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrarUsuarioPageRoutingModule {}
