import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent implements OnInit {

  formulario!: FormGroup

  constructor(private service: CategoriaService, private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, 
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])]
    })
  }

  incluirCategoria() {
    if (this.formulario.valid) {
      try {
        this.service.incluir(this.formulario.value).subscribe(() => this.router.navigate(['/categorias']))
        this.toastr.success('Categoria criada com sucesso!')
      } catch (error) {
        this.toastr.error('Erro ao tentar inserir a categoria, tente novamente', 'Erro!')
        console.log(error)
      }
    } else {
      this.toastr.error('Preencha o formulário corretamente!', 'Erro!')
    }
  }

  cancelar() {
    this.router.navigate(['/categorias'])
  }

  habilitarBotao() {
    if (this.formulario.valid) {
      return 'rounded-md py-2 px-4 bg-lime-200 hover:bg-lime-500 text-black hover:text-white'
    } else {
      return 'rounded-md py-2 px-4 hover:bg-transparent border border-stone-600 text-stone-300'
    }
  }
}
