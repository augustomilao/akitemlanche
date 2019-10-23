import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'professional-inserir', loadChildren: './professional-inserir/professional-inserir.module#ProfessionalInserirPageModule' },
  { path: 'professional-editar/:id', loadChildren: './professional-editar/professional-editar.module#ProfessionalEditarPageModule' },
  { path: 'professional-list', loadChildren: './professional-list/professional-list.module#ProfessionalListPageModule' },
  { path: 'professional-delete', loadChildren: './professional-delete/professional-delete.module#ProfessionalDeletePageModule' },
  { path: 'cliente-inserir', loadChildren: './cliente-inserir/cliente-inserir.module#ClienteInserirPageModule' },
  { path: 'cliente-delete', loadChildren: './cliente-delete/cliente-delete.module#ClienteDeletePageModule' },
  { path: 'cliente-editar/:id', loadChildren: './cliente-editar/cliente-editar.module#ClienteEditarPageModule' },
  { path: 'cliente-list', loadChildren: './cliente-list/cliente-list.module#ClienteListPageModule' },
  { path: 'cliente-login', loadChildren: './cliente-login/cliente-login.module#ClienteLoginPageModule' },  { path: 'desenvolvedores', loadChildren: './desenvolvedores/desenvolvedores.module#DesenvolvedoresPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
