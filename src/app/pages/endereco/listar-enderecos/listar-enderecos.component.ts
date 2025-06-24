import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaginacaoDto } from 'src/app/shared/models/common/paginacao.dto';
import { EnderecoSaidaDto } from 'src/app/shared/models/endereco/endereco.saida.dto';
import { EnderecoService } from 'src/app/shared/services/endereco.service';

@Component({
  selector: 'app-listar-enderecos',
  templateUrl: './listar-enderecos.component.html',
  styleUrls: ['./listar-enderecos.component.css']
})
export class ListarEnderecosComponent implements OnInit {

  listaEnderecos: PaginacaoDto<EnderecoSaidaDto> = {
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

  constructor(private service: EnderecoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    try {
      this.service.listar(this.paginaAtual).subscribe((listaEnderecos) => {
        this.listaEnderecos = listaEnderecos
        console.log(listaEnderecos)
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao tentar listar os endereços, tente novamente', 'Erro!')
      console.log(error)
    }
  }

  carregarMaisEnderecos() {
    try {
      this.service.listar(++this.paginaAtual).subscribe((listaEnderecos) => {
        this.listaEnderecos.itens.push(...listaEnderecos.itens)
        this.listaEnderecos.temProximaPagina = listaEnderecos.temProximaPagina
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao tentar carregar mais endereços, tente novamente', 'Erro!')
      console.log(error)
    }
  }

}
