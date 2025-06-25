import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListarCategoriasComponent } from './pages/categoria/listar-categorias/listar-categorias.component';
import { CriarCategoriaComponent } from './pages/categoria/criar-categoria/criar-categoria.component';
import { ListarProdutosComponent } from './pages/produto/listar-produtos/listar-produtos.component';
import { CriarProdutoComponent } from './pages/produto/criar-produto/criar-produto.component';
import { ListarEnderecosComponent } from './pages/endereco/listar-enderecos/listar-enderecos.component';
import { CriarEnderecoComponent } from './pages/endereco/criar-endereco/criar-endereco.component';
import { ListarEstoquesComponent } from './pages/estoque/listar-estoques/listar-estoques.component';
import { CriarEstoqueComponent } from './pages/estoque/criar-estoque/criar-estoque.component';
import { MovimentarProdutoComponent } from './pages/produto/movimentar-produto/movimentar-produto.component';

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
  },
  {
    path: 'produtos',
    component: ListarProdutosComponent
  },
  {
    path: 'criar-produto',
    component: CriarProdutoComponent
  },
  {
    path: 'enderecos',
    component: ListarEnderecosComponent
  },
  {
    path: 'criar-endereco',
    component: CriarEnderecoComponent
  },
  {
    path: 'estoques',
    component: ListarEstoquesComponent
  },
  {
    path: 'criar-estoque',
    component: CriarEstoqueComponent
  },
  {
    path: 'movimentar-produto',
    component: MovimentarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
