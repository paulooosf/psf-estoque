import { CategoriaEntradaDto } from "../categoria/categoria.entrada.dto";

export interface ProdutoSaidaDto {
    id: number,
    nome: string,
    descricao: string,
    quantidade: number,
    categoria: CategoriaEntradaDto
}