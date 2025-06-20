import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProdutoResumoDto } from 'src/app/shared/models/produto/produto.resumo.dto';

@Component({
  selector: 'app-modal-produtos',
  templateUrl: './modal-produtos.component.html',
  styleUrls: ['./modal-produtos.component.css']
})
export class ModalProdutosComponent {

  @Input() produtos: ProdutoResumoDto[] = []
  @Output() fecharModal = new EventEmitter<void>()

  constructor() { }

  onFecharModal(): void {
    this.fecharModal.emit()
  }

}
