import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
  path: 'pessoa-fisica',
  loadComponent: () => import('./pessoa-fisica/pessoa-fisica.component').then(m => m.PessoaFisicaComponent)
},
{ path: 'usuario', component: UsuarioComponent}

];
