import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PessoaFisica } from '../model/pessoa-fisica';
import { PessoaFisicaService } from '../service/pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent {
  pessoa: PessoaFisica = {
    nome: '',
    cpf: '' ,
    email: ''
  };

  mensagem = '';

  constructor(private service: PessoaFisicaService, http: HttpClient, private router: Router) {}

  /*
  cadastrar() {
    this.http.post('http://localhost:8080/api/login/criar-usuario', this.usuario, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.mensagem = res;
          if (res === 'Usuário cadastrado com sucesso!') {
            setTimeout(() => this.router.navigate(['/']), 1500);
          }
        },
        error: () => this.mensagem = 'Erro ao cadastrar'
      });
  }
*/
    salvarPessoaFisica() {
    this.service.salvar(this.pessoa).subscribe({
        next: (res) => {
          if(res?.id){
          this.mensagem = 'Pessoa Fisica Cadastrada com Sucesso !!';
           // Redireciona para o formulário de cadastro de usuário com o ID da pessoa
           // Esse res será o objeto PessoaFisica retornado pelo back-end, 
           // com o campo id preenchido. O Angular redireciona para /cadastro/{idPessoa}.
          setTimeout(() => this.router.navigate(['/cadastro']), 1500);  // redireciona para tela de usuário
          } else {
            this.mensagem = 'Erro: ID da pessoa não retornado!';
          }
        },
        error: err => {
          if (err.status === 409) {
          this.mensagem = err.error; // "E-mail já cadastrado!"
      } else {
        this.mensagem = "Erro ao cadastrar Pessoa Fisica";
      }
    }
    });
  }
}


