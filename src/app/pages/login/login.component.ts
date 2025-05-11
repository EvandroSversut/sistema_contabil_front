import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = '';
  senha: string = '';
  mensagemErro: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  fazerLogin() {
  console.log('Enviando para o back-end:', this.login, this.senha);

  this.http.post('http://localhost:8080/api/login', {
    login: this.login,
    senha: this.senha
  }, { responseType: 'text' }).subscribe({
    next: (res) => {
      alert(res); // Mostra "Login realizado com sucesso!"
    },
    error: (err) => {
      console.error('Erro:', err);
      this.mensagemErro = 'Login ou senha inválidos!';
    }
  });
}
}