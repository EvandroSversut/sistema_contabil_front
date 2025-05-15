import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    login: '',
    senha: ''
  };

  mensagem = '';

  constructor(private http: HttpClient, private router: Router) {}

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

  
}

