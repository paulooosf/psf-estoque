import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardDto } from '../models/dashboard/dashboard.dto';
import { PaginacaoDto } from '../models/common/paginacao.dto';
import { ProdutoSaidaDto } from '../models/produto/produto.saida.dto';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly API = 'http://localhost:5051/api/dashboard'

  constructor(private http: HttpClient) { }

  carregar(): Observable<DashboardDto> {
    return this.http.get<DashboardDto>(this.API)
  }

  carregarProdutosComEstoqueBaixo(pagina: number, tamanhoPagina: number = 10): Observable<PaginacaoDto<ProdutoSaidaDto>> {
    let params = new HttpParams()
                            .set('pagina', pagina)
                            .set('tamanhoPagina', tamanhoPagina)
    
    return this.http.get<PaginacaoDto<ProdutoSaidaDto>>(`${this.API}/produtos`, { params })
  }
}
