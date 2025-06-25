import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaginacaoDto } from 'src/app/shared/models/common/paginacao.dto';
import { DashboardDto } from 'src/app/shared/models/dashboard/dashboard.dto';
import { ProdutoSaidaDto } from 'src/app/shared/models/produto/produto.saida.dto';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaProdutosComEstoqueBaixo: PaginacaoDto<ProdutoSaidaDto> = {
    itens: [],
    numeroPagina: 1,
    tamanhoPagina: 10,
    totalPaginas: 0,
    totalItens: 0,
    temPaginaAnterior: false,
    temProximaPagina: false
  }
  dashboard!: DashboardDto;
  paginaAtual: number = 1

  constructor(private service: DashboardService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.carregarDashboard()
    this.carregarProdutosComEstoqueBaixo()
  }

  carregarDashboard() {
    try {
      this.service.carregar().subscribe((dashboard) => {
        this.dashboard = dashboard
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao carregar os dados da dashboard, tente novamente.', 'Erro!')
      console.log(error)
    }
  }

  carregarProdutosComEstoqueBaixo() {
    try {
      this.service.carregarProdutosComEstoqueBaixo(this.paginaAtual).subscribe((listaProdutos) => {
        this.listaProdutosComEstoqueBaixo = listaProdutos
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao carregar os produtos com baixo estoque, tente novamente.', 'Erro!')
      console.log(error)
    }
  }

  carregarMaisProdutosComEstoqueBaixo() {
    try {
      this.service.carregarProdutosComEstoqueBaixo(++this.paginaAtual).subscribe((listaProdutos) => {
        this.listaProdutosComEstoqueBaixo.itens.push(...listaProdutos.itens)
        this.listaProdutosComEstoqueBaixo.temProximaPagina = listaProdutos.temProximaPagina
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao tentar carregar mais produtos, tente novamente', 'Erro!')
      console.log(error)
    }
  }

}
