import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnderecoService } from 'src/app/shared/services/endereco.service';

@Component({
  selector: 'app-criar-endereco',
  templateUrl: './criar-endereco.component.html',
  styleUrls: ['./criar-endereco.component.css']
})
export class CriarEnderecoComponent implements OnInit {

  formulario!: FormGroup

  constructor(private service: EnderecoService, private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      logradouro: ['', Validators.compose([Validators.required, 
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      numero: [null, Validators.min(1)]
    })
  }

  incluirEndereco() {
    if (this.formulario.valid) {
      try {
        this.service.incluir(this.formulario.value).subscribe(() => this.router.navigate(['/enderecos']))
        this.toastr.success('Endereço criado com sucesso!')
      } catch (error) {
        this.toastr.error('Erro ao tentar inserir o endereço, tente novamente', 'Erro!')
        console.log(error)
      }
    } else {
      this.toastr.error('Preencha o formulário corretamente!', 'Erro!')
    }
  }

  cancelar() {
    this.router.navigate(['/enderecos'])
  }

  habilitarBotao() {
    if (this.formulario.valid) {
      return 'rounded-md py-2 px-4 bg-lime-200 hover:bg-lime-500 text-black hover:text-white'
    } else {
      return 'rounded-md py-2 px-4 hover:bg-transparent border border-stone-600 text-stone-300'
    }
  }

}
