import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaListagemDto } from 'src/app/shared/models/categoria/categoria.listagem.dto';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  formulario!: FormGroup
  listaCategorias: CategoriaListagemDto[] = []

  constructor(private service: ProdutoService, private categoriaService: CategoriaService, 
    private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, 
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      descricao: ['', Validators.compose([Validators.required, 
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      categoriaId: [null, Validators.min(1)]
    })

    this.carregarCategorias()
  }

  carregarCategorias(): void {
    try {
      this.categoriaService.listar(1, 999).subscribe((listaCategorias) => {
        this.listaCategorias = listaCategorias.itens
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao carregar as categorias, tente novamente.', 'Erro!')
      console.log(error)
    }
  }

  incluirProduto() {
    if (this.formulario.valid) {
      try {
        this.service.incluir(this.formulario.value).subscribe(() => this.router.navigate(['/produtos']))
        this.toastr.success('Produto criado com sucesso!')
      } catch (error) {
        this.toastr.error('Ocorreu um erro ao tentar inserir o produto, tente novamente.', 'Erro!')
        console.log(error)
      }
    } else {
      this.toastr.error('Preencha o formulário corretamente!', 'Erro!')
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
