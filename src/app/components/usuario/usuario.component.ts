import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PessoaFisica } from '../../model/pessoa-fisica';
import { PessoaFisicaService } from '../../services/pessoa-fisica.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

    cadastro = {
    nome: '',
    cpf: '',
    rg: '',
    telefone: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    uf: '',
    email: '',
    senha: ''
  };

   mensagemErro = '';

  constructor(
    private http: HttpClient
  ) {}

  // 🔹 Salvar Cadastro
  salvarCadastro() {
    this.http.post('http://localhost:8080/api/cadastro', this.cadastro)
      .subscribe({
        next: () => {
          alert('Cadastro realizado com sucesso!');
          this.cadastro = {
            nome: '', cpf: '', rg: '', telefone: '', rua: '', numero: '',
            complemento:'',bairro: '', cep: '', cidade: '', uf: '', email: '', senha: ''
          };
        },
        error: (err) => {
          this.mensagemErro = 'Erro ao cadastrar';
          console.error(err);
        }
      });
  }
}