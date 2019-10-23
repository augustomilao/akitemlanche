import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessionalInserirPage } from './professional-inserir.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalInserirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessionalInserirPage]
})
export class ProfessionalInserirPageModule {}
