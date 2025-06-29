import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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


  constructor(private service: CategoriaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    try {
      this.service.listar(this.paginaAtual, 10).subscribe((listaCategorias) => {
        this.listaCategorias = listaCategorias
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao tentar listar as categorias, tente novamente', 'Erro!')
      console.log(error)
    }
  }

  carregarMaisCategorias() {
    try {
      this.service.listar(++this.paginaAtual, 10).subscribe((listaCategorias) => {
        this.listaCategorias.itens.push(...listaCategorias.itens)
        this.listaCategorias.temProximaPagina = listaCategorias.temProximaPagina
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao tentar carregar mais categorias, tente novamente', 'Erro!')
      console.log(error)
    }
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
