import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PessoaFisica } from '../../model/pessoa-fisica';
import { PessoaFisicaService } from '../../services/pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent {

  pessoa: PessoaFisica = this.novaPessoa();

  usuarios: any[] = [];
  filtro: string = '';
  mensagemErro = '';

  constructor(
    private service: PessoaFisicaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buscar();
  }

  // 🔹 Salvar ou Atualizar
  salvarPessoaFisica() {
    if (this.pessoa.id) {
      this.service.atualizar(this.pessoa).subscribe({
        next: () => {
          this.mensagemErro = 'Pessoa Física atualizada com sucesso!';
          this.buscar();
          this.limparFormulario();
        },
        error: (err) => this.tratarErro(err)
      });
    } else {
      this.service.salvar(this.pessoa).subscribe({
        next: (res) => {
          if (res?.id) {
            this.mensagemErro = 'Pessoa Física cadastrada com sucesso!';
            this.buscar();
            this.limparFormulario();
          } else {
            this.mensagemErro = 'Erro: ID da pessoa não retornado!';
          }
        },
        error: (err) => this.tratarErro(err)
      });
    }
  }

  // 🔍 Buscar pessoas
  buscar() {
    this.service.buscar(this.filtro).subscribe({
      next: res => {
        this.usuarios = res;
        this.mensagemErro = '';
      },
      error: err => {
        this.mensagemErro = 'Erro ao buscar usuários.';
        console.error(err);
      }
    });
  }

  // ✏️ Editar
  editar(pessoa: PessoaFisica) {
    this.pessoa = { ...pessoa };
  }

  // 🗑️ Excluir
  excluir(id: number) {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      this.service.excluir(id).subscribe({
        next: () => {
          alert('Usuário excluído com sucesso!');
          this.buscar();
        },
        error: err => {
          console.error(err);
          alert('Erro ao excluir usuário.');
        }
      });
    }
  }

  // ➕ Novo
  novo() {
    this.limparFormulario();
  }

  // 🚫 Limpar formulário
  limparFormulario() {
    this.pessoa = this.novaPessoa();
  }

  // 🔧 Tratamento de erros
  tratarErro(err: any) {
    if (err.status === 409) {
      this.mensagemErro = err.error;
    } else {
      this.mensagemErro = 'Erro ao salvar Pessoa Física';
      console.error(err);
      alert('Erro. Verifique os dados e tente novamente.');
    }
  }

  // 🧠 Cria um novo objeto PessoaFisica vazio
  novaPessoa(): PessoaFisica {
    return {
      id: undefined,
      nome: '',
      cpf: '',
      rg: '',
      estadoCivil: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cep: '',
      cidade: '',
      uf: '',
      email: '',
      telefone: ''
    };
  }
}
