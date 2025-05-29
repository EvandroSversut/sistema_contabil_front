import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PessoaFisicaComponent } from './components/pessoa-fisica/pessoa-fisica.component';
import { PessoajuridicaComponent } from './components/pessoa-juridica/pessoa-juridica.component';
import { authGuard } from './guard/auth.guard';
import { UsuarioComponent } from './components/usuario/usuario.component';

export const routes: Routes = [

  //  Rotas liberadas:
  { path: '', component: LoginComponent },
   { path: 'usuario', component: UsuarioComponent },
  // 🔐 Rotas protegidas:
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
 { path: 'pessoa-fisica', component: PessoaFisicaComponent, canActivate: [authGuard] },
  { path: 'pessoa-juridica', component: PessoajuridicaComponent, canActivate: [authGuard] },
];
