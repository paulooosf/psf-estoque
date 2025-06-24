import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaginacaoDto } from 'src/app/shared/models/common/paginacao.dto';
import { ProdutoSaidaDto } from 'src/app/shared/models/produto/produto.saida.dto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaProdutos: PaginacaoDto<ProdutoSaidaDto> = {
    itens: [],
    numeroPagina: 1,
    tamanhoPagina: 10,
    totalPaginas: 0,
    totalItens: 0,
    temPaginaAnterior: false,
    temProximaPagina: false
  }
  paginaAtual: number = 1
  mostrarModalQuantidade: boolean = false
  produtoSelecionado?: ProdutoSaidaDto

  constructor(private service: ProdutoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos() {
    try {
      this.service.listar(this.paginaAtual).subscribe((listaProdutos) => {
        this.listaProdutos = listaProdutos
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao carregar os produtos, tente novamente.', 'Erro!')
      console.log(error)
    }
  }

  carregarMaisProdutos() {
    try {
      this.service.listar(++this.paginaAtual).subscribe((listaProdutos) => {
        this.listaProdutos.itens.push(...listaProdutos.itens)
        this.listaProdutos.temProximaPagina = listaProdutos.temProximaPagina
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao tentar carregar mais produtos, tente novamente', 'Erro!')
      console.log(error)
    }
  }

  abrirModalQuantidade(produto: ProdutoSaidaDto): void {
    this.produtoSelecionado = produto
    this.mostrarModalQuantidade = true
  }

  fecharModalQuantidade(): void {
    this.mostrarModalQuantidade = false
    this.produtoSelecionado = undefined
  }

  recarregarProdutos() {
    this.paginaAtual = 1
    this.carregarProdutos()
  }

}
