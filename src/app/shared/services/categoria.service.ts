import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaListagemDto } from '../models/categoria/categoria.listagem.dto';
import { CategoriaEntradaDto } from '../models/categoria/categoria.entrada.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API = 'http://localhost:5051/api/categoria'

  constructor(private http: HttpClient) { }

  listar(): Observable<CategoriaListagemDto[]> {
    return this.http.get<CategoriaListagemDto[]>(this.API)
  }

  buscar(id: number): Observable<CategoriaListagemDto> {
    return this.http.get<CategoriaListagemDto>(`${this.API}/${id}`)
  }

  incluir(categoria: CategoriaEntradaDto): Observable<CategoriaListagemDto> {
    return this.http.post<CategoriaListagemDto>(this.API, categoria)
  }

  alterar(categoria: CategoriaEntradaDto, id: number): Observable<CategoriaListagemDto> {
    return this.http.put<CategoriaListagemDto>(`${this.API}/${id}`, categoria)
  }

  excluir(id: number): Observable<CategoriaListagemDto> {
    return this.http.delete<CategoriaListagemDto>(`${this.API}/${id}`)
  }
}
