import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteInserirPage } from './cliente-inserir.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteInserirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClienteInserirPage]
})
export class ClienteInserirPageModule {}
