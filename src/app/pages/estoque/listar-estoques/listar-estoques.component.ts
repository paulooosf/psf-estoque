import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaginacaoDto } from 'src/app/shared/models/common/paginacao.dto';
import { EstoqueSaidaDto } from 'src/app/shared/models/estoque/estoque.saida.dto';
import { ProdutoResumoDto } from 'src/app/shared/models/produto/produto.resumo.dto';
import { EstoqueService } from 'src/app/shared/services/estoque.service';

@Component({
  selector: 'app-listar-estoques',
  templateUrl: './listar-estoques.component.html',
  styleUrls: ['./listar-estoques.component.css']
})
export class ListarEstoquesComponent implements OnInit {

  listaEstoques: PaginacaoDto<EstoqueSaidaDto> = {
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
    produtosDoEstoqueSelecionado: ProdutoResumoDto[] = []

  constructor(private service: EstoqueService, private toastr: ToastrService) { }

  ngOnInit(): void {
     try {
      this.service.listar(this.paginaAtual, 10).subscribe((listaEstoques) => {
        this.listaEstoques = listaEstoques
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao tentar listar os estoques, tente novamente', 'Erro!')
      console.log(error)
    }
  }

  carregarMaisEstoques() {
    try {
      this.service.listar(++this.paginaAtual, 10).subscribe((listaEstoques) => {
        this.listaEstoques.itens.push(...listaEstoques.itens)
        this.listaEstoques.temProximaPagina = listaEstoques.temProximaPagina
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao tentar carregar mais estoques, tente novamente', 'Erro!')
      console.log(error)
    }
  }

  abrirModalProdutos(produtos: ProdutoResumoDto[]): void {
    this.produtosDoEstoqueSelecionado = produtos
    this.mostrarModalProdutos = true
  }

  fecharModalProdutos(): void {
    this.mostrarModalProdutos = false
    this.produtosDoEstoqueSelecionado = []
  }

}
