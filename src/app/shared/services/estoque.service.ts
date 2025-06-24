import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstoqueSaidaDto } from '../models/estoque/estoque.saida.dto';
import { PaginacaoDto } from '../models/common/paginacao.dto';
import { Observable } from 'rxjs';
import { EstoqueEntradaDto } from '../models/estoque/estoque.entrada.dto';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private readonly API = 'http://localhost:5051/api/estoque'
  
  constructor(private http: HttpClient) { }

  listar(pagina: number, tamanhoPagina: number = 10): Observable<PaginacaoDto<EstoqueSaidaDto>> {

    let params = new HttpParams()
                        .set('pagina', pagina)
                        .set('tamanhoPagina', tamanhoPagina)

    return this.http.get<PaginacaoDto<EstoqueSaidaDto>>(this.API, { params })
  }

  buscar(id: number): Observable<EstoqueSaidaDto> {
    return this.http.get<EstoqueSaidaDto>(`${this.API}/${id}`)
  }

  incluir(estoque: EstoqueEntradaDto): Observable<EstoqueSaidaDto> {
      return this.http.post<EstoqueSaidaDto>(this.API, estoque)
  }

  incluirProduto(id: number, idProduto: number): Observable<EstoqueSaidaDto> {
    return this.http.put<EstoqueSaidaDto>(`${this.API}/${id}/incluirProduto/${idProduto}`, null)
  }

  removerProduto(id: number, idProduto: number): Observable<EstoqueSaidaDto> {
    return this.http.put<EstoqueSaidaDto>(`${this.API}/${id}/removerProduto/${idProduto}`, null)
  }
  
  alterar(estoque: EstoqueEntradaDto, id: number): Observable<EstoqueSaidaDto> {
    return this.http.put<EstoqueSaidaDto>(`${this.API}/${id}`, estoque)
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`)
  }
}
