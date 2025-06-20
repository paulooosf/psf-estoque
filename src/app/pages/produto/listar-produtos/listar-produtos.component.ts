import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos
    })
  }

  carregarMaisProdutos() {
    this.service.listar(++this.paginaAtual).subscribe((listaProdutos) => {
      this.listaProdutos.itens.push(...listaProdutos.itens)
      this.listaProdutos.temProximaPagina = listaProdutos.temProximaPagina
    })
  }

  abrirModalQuantidade(produto: ProdutoSaidaDto): void {
    this.produtoSelecionado = produto
    this.mostrarModalQuantidade = true
  }

  fecharModalQuantidade(): void {
    this.mostrarModalQuantidade = false
    this.produtoSelecionado = undefined
  }

}
