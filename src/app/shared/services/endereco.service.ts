import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnderecoSaidaDto } from '../models/endereco/endereco.saida.dto';
import { PaginacaoDto } from '../models/common/paginacao.dto';
import { Observable } from 'rxjs';
import { EnderecoEntradaDto } from '../models/endereco/endereco.entrada.dto';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private readonly API = 'http://localhost:5051/api/endereco'

  constructor(private http: HttpClient) { }

  listar(pagina: number): Observable<PaginacaoDto<EnderecoSaidaDto>> {
  
    let params = new HttpParams()
                        .set('pagina', pagina)
                        .set('tamanhoPagina', 10)

    return this.http.get<PaginacaoDto<EnderecoSaidaDto>>(this.API, { params })
  }

  buscar(id: number): Observable<EnderecoSaidaDto> {
    return this.http.get<EnderecoSaidaDto>(`${this.API}/${id}`)
  }

  incluir(endereco: EnderecoEntradaDto): Observable<EnderecoSaidaDto> {
      return this.http.post<EnderecoSaidaDto>(this.API, endereco)
  }
  
  alterar(endereco: EnderecoEntradaDto, id: number): Observable<EnderecoSaidaDto> {
    return this.http.put<EnderecoSaidaDto>(`${this.API}/${id}`, endereco)
  }

  excluir(id: number): Observable<EnderecoSaidaDto> {
    return this.http.delete<EnderecoSaidaDto>(`${this.API}/${id}`)
  }
}
