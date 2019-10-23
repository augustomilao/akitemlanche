import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessionalDeletePage } from './professional-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalDeletePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessionalDeletePage]
})
export class ProfessionalDeletePageModule {}
