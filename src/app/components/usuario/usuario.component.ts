import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PessoaUsuarioService } from '../../services/pessoa-usuario';
import { PessoaUsuario } from '../../model/pessoa-usuario';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  dados: PessoaUsuario = {
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
    private service: PessoaUsuarioService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
) { }
  /*
  const idPessoa = Number(this.route.snapshot.paramMap.get('idPessoa'));
  if (idPessoa) {
    this.usuario.pessoa.id = idPessoa;
  }
}
*/
  salvar() {
    this.service.cadastrar(this.dados).subscribe({
       
        next: msg => {
          alert(msg);
          this.router.navigate(['/']); // Vai para o login
         },
        error: err => {
          if(err.status === 409){
            // Mensagem enviada pelo back-end no body (ex: "CPF já cadastrado.")
            this.mensagemErro = err.error;
          } else {
        console.error('Erro:', err);
        alert('Erro ao cadastrar. Verifique os dados.');
        this.mensagemErro = err.error; // <-- aqui vem "CPF já está em uso."
        this.mensagemErro = 'Erro ao realizar cadastro. Tente novamente.';   
      }
    }
    });
  }
} 
