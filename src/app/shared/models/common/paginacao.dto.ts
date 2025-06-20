export interface PaginacaoDto<T> {
    itens: T[];
    numeroPagina: number;    
    tamanhoPagina: number; 
    totalPaginas: number;    
    totalItens: number;    
    temPaginaAnterior: boolean;
    temProximaPagina: boolean; 
}