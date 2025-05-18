import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaFisica } from '../model/pessoa-fisica'; 
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PessoaFisicaService {
  private apiUrl = 'http://localhost:8080/api/pessoa-fisica';

  constructor(private http: HttpClient) {}

  salvar(pessoa: PessoaFisica): Observable<PessoaFisica> {
    console.log('Enviando para o back-end:', pessoa.cpf);
    console.log('Enviando para o back-end:', pessoa.email);
    return this.http.post<PessoaFisica>(this.apiUrl, pessoa);
  }

  listar(): Observable<PessoaFisica[]> {
    return this.http.get<PessoaFisica[]>(this.apiUrl);
  }
}
