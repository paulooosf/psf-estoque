import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstoqueSaidaDto } from 'src/app/shared/models/estoque/estoque.saida.dto';
import { ProdutoSaidaDto } from 'src/app/shared/models/produto/produto.saida.dto';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-movimentar-produto',
  templateUrl: './movimentar-produto.component.html',
  styleUrls: ['./movimentar-produto.component.css']
})
export class MovimentarProdutoComponent implements OnInit {

  formulario!: FormGroup
  modo: string = 'inicio'
  listaProdutos: ProdutoSaidaDto[] = []
  listaEstoques: EstoqueSaidaDto[] = []

  constructor(private service: ProdutoService, private estoqueService: EstoqueService,
    private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      estoqueId: [null, [Validators.required]],
      produtoId: [null, [Validators.required]]
    })

    this.carregarProdutos()
    this.carregarEstoques()
  }

  carregarProdutos(): void {
    try {
      this.service.listar(1, 999).subscribe((listaProdutos) => {
        this.listaProdutos = listaProdutos.itens
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao carregar os produtos, tente novamente.', 'Erro!')
      console.log(error)
    }
  }

  carregarEstoques(): void {
    try {
      this.estoqueService.listar(1, 999).subscribe((listaEstoques) => {
        this.listaEstoques = listaEstoques.itens
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao carregar os estoques, tente novamente.', 'Erro!')
      console.log(error)
    }
  }

  movimentarProduto(): void {
    if (!this.formulario.valid) {
      this.toastr.error('Preencha o formulário corretamente!', 'Erro!')
      return
    }

    const estoqueSelecionado: EstoqueSaidaDto = this.formulario.value.estoqueId
    const produtoSelecionado: ProdutoSaidaDto = this.formulario.value.produtoId

    if (this.modo === 'incluir') {
      if (estoqueSelecionado.produtos.some(produto => produto.nome === produtoSelecionado.nome)) {
        this.toastr.error('O produto já se encontra no estoque escolhido!', 'Erro!')
        return
      }
      try {
        this.estoqueService.incluirProduto(estoqueSelecionado.id, produtoSelecionado.id).subscribe(() => this.router.navigate(['/produtos']))
        this.toastr.success('Movimentação realizada com sucesso!')
      } catch (error) {
        this.toastr.error('Ocorreu um erro ao tentar movimentar o produto, tente novamente.', 'Erro!')
        console.log(error)
      }
    }

    if (this.modo === 'remover') {
      if (!estoqueSelecionado.produtos.some(produto => produto.nome === produtoSelecionado.nome)) {
        this.toastr.error('O produto não se encontra no estoque escolhido!', 'Erro!')
        return
      }
      try {
        this.estoqueService.removerProduto(estoqueSelecionado.id, produtoSelecionado.id).subscribe(() => this.router.navigate(['/produtos']))
        this.toastr.success('Movimentação realizada com sucesso!')
      } catch (error) {
        this.toastr.error('Ocorreu um erro ao tentar movimentar o produto, tente novamente.', 'Erro!')
        console.log(error)
      }
    }
  }

  cancelar() {
    this.router.navigate(['/produtos'])
  }

  habilitarBotao() {
    if (this.formulario.valid) {
      return 'rounded-md py-2 px-4 bg-lime-200 hover:bg-lime-500 text-black hover:text-white'
    } else {
      return 'rounded-md py-2 px-4 hover:bg-transparent border border-stone-600 text-stone-300'
    }
  }

}
