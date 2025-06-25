import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListarCategoriasComponent } from './pages/categoria/listar-categorias/listar-categorias.component';
import { CriarCategoriaComponent } from './pages/categoria/criar-categoria/criar-categoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalProdutosComponent } from './components/modal-produtos/modal-produtos.component';
import { ListarProdutosComponent } from './pages/produto/listar-produtos/listar-produtos.component';
import { CriarProdutoComponent } from './pages/produto/criar-produto/criar-produto.component';
import { ModalQuantidadeComponent } from './components/modal-quantidade/modal-quantidade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CriarEnderecoComponent } from './pages/endereco/criar-endereco/criar-endereco.component';
import { ListarEnderecosComponent } from './pages/endereco/listar-enderecos/listar-enderecos.component';
import { CriarEstoqueComponent } from './pages/estoque/criar-estoque/criar-estoque.component';
import { ListarEstoquesComponent } from './pages/estoque/listar-estoques/listar-estoques.component';
import { MovimentarProdutoComponent } from './pages/produto/movimentar-produto/movimentar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ListarCategoriasComponent,
    CriarCategoriaComponent,
    ModalProdutosComponent,
    ListarProdutosComponent,
    CriarProdutoComponent,
    ModalQuantidadeComponent,
    ListarEnderecosComponent,
    CriarEnderecoComponent,
    CriarEstoqueComponent,
    ListarEstoquesComponent,
    MovimentarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
