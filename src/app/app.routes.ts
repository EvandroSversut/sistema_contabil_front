import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
  path: 'pessoa-fisica',
  loadComponent: () => import('./pessoa-fisica/pessoa-fisica.component').then(m => m.PessoaFisicaComponent)
}

];
