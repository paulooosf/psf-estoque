import { ProdutoResumoDto } from "../produto/produto.resumo.dto";

export interface CategoriaListagemDto {
    id: number,
    nome: string,
    produtos: ProdutoResumoDto[]
}