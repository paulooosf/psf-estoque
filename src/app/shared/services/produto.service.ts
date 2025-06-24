import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacaoDto } from '../models/common/paginacao.dto';
import { ProdutoSaidaDto } from '../models/produto/produto.saida.dto';
import { ProdutoEntradaDto } from '../models/produto/produto.entrada.dto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:5051/api/produto'

  constructor(private http: HttpClient) { }

  listar(pagina: number, tamanhoPagina: number = 10): Observable<PaginacaoDto<ProdutoSaidaDto>> {

    let params = new HttpParams()
                        .set('pagina', pagina)
                        .set('tamanhoPagina', tamanhoPagina)

    return this.http.get<PaginacaoDto<ProdutoSaidaDto>>(this.API, { params })
  }

  buscar(id: number): Observable<ProdutoSaidaDto> {
    return this.http.get<ProdutoSaidaDto>(`${this.API}/${id}`)
  }

  buscarPorCategoria(idCategoria: number): Observable<ProdutoSaidaDto> {
    return this.http.get<ProdutoSaidaDto>(`${this.API}/porCategoria/${idCategoria}`)
  }

  incluir(produto: ProdutoEntradaDto): Observable<ProdutoSaidaDto> {
      return this.http.post<ProdutoSaidaDto>(this.API, produto)
  }

  adicionarQuantidade(id: number, quantidade: number): Observable<ProdutoSaidaDto> {
    return this.http.put<ProdutoSaidaDto>(`${this.API}/adicionarQuantidade/${id}`, quantidade)
  }

  removerQuantidade(id: number, quantidade: number): Observable<ProdutoSaidaDto> {
    return this.http.put<ProdutoSaidaDto>(`${this.API}/removerQuantidade/${id}`, quantidade)
  }
  
  alterar(produto: ProdutoEntradaDto, id: number): Observable<ProdutoSaidaDto> {
    return this.http.put<ProdutoSaidaDto>(`${this.API}/${id}`, produto)
  }

  excluir(id: number): Observable<ProdutoSaidaDto> {
    return this.http.delete<ProdutoSaidaDto>(`${this.API}/${id}`)
  }
}
