import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaFisica } from '../model/pessoa-fisica'; 
import { Observable } from 'rxjs';
import { PessoaJuridica } from '../model/pessoa-juridica';

@Injectable({ providedIn: 'root' })
export class PessoaJuridicaService {
  private apiUrl = 'http://localhost:8080/api/pessoa-juridica';

  constructor(private http: HttpClient) {}

  salvar(pessoaJud: PessoaJuridica): Observable<PessoaJuridica> {
    console.log('Enviando para o back-end:', pessoaJud.cnpj);
    console.log('Enviando para o back-end:', pessoaJud.inscEstadual);
    console.log('📦 Enviando pessoa para o back-end:', JSON.stringify(pessoaJud, null, 2));
    return this.http.post<PessoaJuridica>(this.apiUrl, pessoaJud);
  }

  listar(): Observable<PessoaFisica[]> {
    return this.http.get<PessoaFisica[]>(this.apiUrl);
  }
}
