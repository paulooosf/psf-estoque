import { Component, OnInit } from '@angular/core';
import { CategoriaListagemDto } from 'src/app/shared/models/categoria/categoria.listagem.dto';
import { PaginacaoDto } from 'src/app/shared/models/common/paginacao.dto';
import { ProdutoResumoDto } from 'src/app/shared/models/produto/produto.resumo.dto';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  listaCategorias: PaginacaoDto<CategoriaListagemDto> = {
    itens: [],
    numeroPagina: 1,
    tamanhoPagina: 10,
    totalPaginas: 0,
    totalItens: 0,
    temPaginaAnterior: false,
    temProximaPagina: false
  }
  paginaAtual: number = 1
  mostrarModalProdutos: boolean = false
  produtosDaCategoriaSelecionada: ProdutoResumoDto[] = []


  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaCategorias) => {
      this.listaCategorias = listaCategorias
    })
  }

  carregarMaisCategorias() {
    this.service.listar(++this.paginaAtual).subscribe((listaCategorias) => {
      this.listaCategorias.itens.push(...listaCategorias.itens)
      this.listaCategorias.temProximaPagina = listaCategorias.temProximaPagina
    })
  }

  abrirModalProdutos(produtos: ProdutoResumoDto[]): void {
    this.produtosDaCategoriaSelecionada = produtos
    this.mostrarModalProdutos = true
  }

  fecharModalProdutos(): void {
    this.mostrarModalProdutos = false
    this.produtosDaCategoriaSelecionada = []
  }

}
