import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario.model';
import { PessoaFisica } from 'src/app/model/pessoa-fisica.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  usuario: Usuario = {
    email: '',
    senha: '',
    pessoaFisica: {
      nome: '',
      telefone: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cep: '',
      cidade: '',
      uf: '',
      email: '',
      cpf: '',
      rg: ''
    }
  };

  confirmarSenha: string = '';
  mensagem: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  cadastrar() {
    if (this.usuario.senha !== this.confirmarSenha) {
      this.mensagem = 'Senhas não conferem.';
      return;
    }

    this.usuarioService.cadastrar(this.usuario).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']); // Redireciona para login após cadastro
      },
      error: (err) => {
        console.error(err);
        this.mensagem = 'Erro ao cadastrar. Verifique os dados.';
      }
    });
  }
}
