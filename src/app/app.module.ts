import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListarCategoriasComponent } from './pages/listar-categorias/listar-categorias.component';
import { CriarCategoriaComponent } from './pages/criar-categoria/criar-categoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalProdutosComponent } from './components/modal-produtos/modal-produtos.component';
import { ListarProdutosComponent } from './pages/listar-produtos/listar-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ListarCategoriasComponent,
    CriarCategoriaComponent,
    ModalProdutosComponent,
    ListarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
