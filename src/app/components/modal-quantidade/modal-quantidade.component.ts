import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProdutoSaidaDto } from 'src/app/shared/models/produto/produto.saida.dto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-modal-quantidade',
  templateUrl: './modal-quantidade.component.html',
  styleUrls: ['./modal-quantidade.component.css']
})
export class ModalQuantidadeComponent implements OnInit {

  @Input() produto!: ProdutoSaidaDto
  @Output() fecharModal = new EventEmitter<void>()
  @Output() recarregarProdutos = new EventEmitter<void>()

  formulario!: FormGroup
  modo: string = 'inicio'

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      quantidade: [null, Validators.min(1)]
    })
  }

  constructor(private service: ProdutoService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  onFecharModal(): void {
    this.fecharModal.emit()
  }

  alterarQuantidade() {
    if (this.formulario.valid) {
      const quantidade = this.formulario.get('quantidade')?.value

      if (this.modo === 'remover' && quantidade > this.produto.quantidade) {
        this.toastr.error('A quantidade a ser removida não pode ser maior que a quantidade do produto!', 'Erro!')
        return
      }

      if (this.modo === 'adicionar') {
        try {
          this.service.adicionarQuantidade(this.produto.id, quantidade).subscribe(() => {
            this.fecharModal.emit()
            this.recarregarProdutos.emit()
            this.toastr.success('Quantidade adicionada com sucesso!')
          })
        } catch (error) {
          this.toastr.error('Ocorreu um erro ao tentar atualizar a quantidade, tente novamente.', 'Erro!')
          console.log(error)
        }
      } else {
        try {
          this.service.removerQuantidade(this.produto.id, quantidade).subscribe(() => {
            this.fecharModal.emit()
            this.recarregarProdutos.emit()
            this.toastr.success('Quantidade removida com sucesso!')
          })
        } catch (error) {
          this.toastr.error('Ocorreu um erro ao tentar atualizar a quantidade, tente novamente.', 'Erro!')
          console.log(error)
        }
      }
    } else {
      this.toastr.error('Preencha o formulário corretamente!', 'Erro!')
    }
  }

  habilitarBotao() {
    if (this.formulario.valid) {
      return 'rounded-md py-2 px-4 bg-lime-200 hover:bg-lime-500 text-black hover:text-white'
    } else {
      return 'rounded-md py-2 px-4 hover:bg-transparent border border-stone-600 text-stone-300'
    }
  }
}
