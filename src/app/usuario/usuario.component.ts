import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuario = {
    login: '',
    senha: '',
    pessoa: {
      id: 0
    }
  };

  mensagem = '';

  constructor(
  private http: HttpClient,
  private router: Router,
  private route: ActivatedRoute
) {
  const idPessoa = Number(this.route.snapshot.paramMap.get('idPessoa'));
  if (idPessoa) {
    this.usuario.pessoa.id = idPessoa;
  }
}

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

