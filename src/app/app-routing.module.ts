import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListarCategoriasComponent } from './pages/listar-categorias/listar-categorias.component';
import { CriarCategoriaComponent } from './pages/criar-categoria/criar-categoria.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
  },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
      path: 'categorias',
      component: ListarCategoriasComponent
  },
  {
      path: 'criar-categoria',
      component: CriarCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
