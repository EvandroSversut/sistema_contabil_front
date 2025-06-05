import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PessoaFisica } from '../../model/pessoa-fisica';
import { PessoaFisicaService } from '../../services/pessoa-fisica.service';
import { PessoaJuridica } from '../../model/pessoa-juridica';
import { Pessoa } from '../../model/pessoa.model';
import { PessoaJuridicaService } from '../../services/pessoa-juridica.service';

@Component({
  selector: 'app-pessoa-juridica',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './pessoa-juridica.component.html',
  styleUrls: ['./pessoa-juridica.component.css']
})
export class PessoajuridicaComponent {
  
    pessoaJud: PessoaJuridica = {
      nome: '',
      razaoSocial: '',
      nomeFantasia: '',
      cnpj: '',
      inscEstadual: '',
      inscMunicipal: '',
      telefone: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cep: '',
      cidade: '',
      uf: '',
      email: ''

    }

  mensagem = '';

  constructor(private service: PessoaJuridicaService, http: HttpClient, private router: Router) {}

  salvarPessoaJuridica(){
    this.service.salvar(this.pessoaJud).subscribe({
        next: (res) => {
          if(res?.id){
            this.mensagem = 'Pessoa Juridica Cadastrada com Sucesso !!;';
            this.router.navigate(['/']);
          }else{
            this.mensagem = 'Erro: ID da pessoa nao retornado!';
          }
          },
        error: err => {
          if (err.status === 409) {
            this.mensagem = err.error;
          } else {
            this.mensagem = "Erro ao cadastrar Pessoa Juridica";
            console.error('❌ Erro ao cadastrar:', err);
            alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
          }
        }
    })
  
  }
 }


    
