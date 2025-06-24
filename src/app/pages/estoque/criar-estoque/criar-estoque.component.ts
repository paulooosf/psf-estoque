import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnderecoSaidaDto } from 'src/app/shared/models/endereco/endereco.saida.dto';
import { EnderecoService } from 'src/app/shared/services/endereco.service';
import { EstoqueService } from 'src/app/shared/services/estoque.service';

@Component({
  selector: 'app-criar-estoque',
  templateUrl: './criar-estoque.component.html',
  styleUrls: ['./criar-estoque.component.css']
})
export class CriarEstoqueComponent implements OnInit {

  formulario!: FormGroup
  listaEnderecos: EnderecoSaidaDto[] = []

  constructor(private service: EstoqueService, private enderecoService: EnderecoService,
    private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      enderecoId: [null, Validators.min(1)],
      nome: ['', Validators.compose([Validators.required, 
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])]
    })

    this.carregarEnderecos()
  }

  carregarEnderecos(): void {
    try {
      this.enderecoService.listar(1, 999).subscribe((listaEnderecos) => {
        this.listaEnderecos = listaEnderecos.itens
      })
    } catch (error) {
      this.toastr.error('Ocorreu um erro ao carregar os endereços, tente novamente.', 'Erro!')
      console.log(error)
    }
  }

  incluirEstoque() {
    if (this.formulario.valid) {
      try {
        this.service.incluir(this.formulario.value).subscribe(() => this.router.navigate(['/estoques']))
        this.toastr.success('Estoque criado com sucesso!')
      } catch (error) {
        this.toastr.error('Ocorreu um erro ao tentar inserir o estoque, tente novamente.', 'Erro!')
        console.log(error)
      }
    } else {
      this.toastr.error('Preencha o formulário corretamente!', 'Erro!')
    }
  }

  cancelar() {
    this.router.navigate(['/estoques'])
  }

  habilitarBotao() {
    if (this.formulario.valid) {
      return 'rounded-md py-2 px-4 bg-lime-200 hover:bg-lime-500 text-black hover:text-white'
    } else {
      return 'rounded-md py-2 px-4 hover:bg-transparent border border-stone-600 text-stone-300'
    }
  }

}
