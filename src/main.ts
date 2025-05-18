import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { authInterceptor } from './app/auth.interceptor';
import { HomeComponent } from './app/home/home.component';
import { UsuarioComponent } from './app/usuario/usuario.component';
import { PessoaFisicaComponent } from './app/pessoa-fisica/pessoa-fisica.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'usuario/:idPessoa', component: UsuarioComponent },
      { path: 'home', component: HomeComponent }, // 👈 aqui
      { path: 'pessoa-fisica', component: PessoaFisicaComponent }, // 👈 adicione esta rota
     // { path: 'cadastro', component: CadastroComponent } // 👈 opcional, se tiver tela de cadastro separada
    ])
  ]
});
    