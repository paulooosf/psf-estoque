import { EnderecoSaidaDto } from "../endereco/endereco.saida.dto";
import { ProdutoResumoDto } from "../produto/produto.resumo.dto";

export interface EstoqueSaidaDto {
    id: number,
    nome: string,
    endereco: EnderecoSaidaDto,
    produtos: ProdutoResumoDto[]
}