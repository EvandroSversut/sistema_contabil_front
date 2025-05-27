import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PessoaFisicaComponent } from './components/pessoa-fisica/pessoa-fisica.component';
import { PessoajuridicaComponent } from './components/pessoa-juridica/pessoa-juridica.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pessoa-fisica', component: PessoaFisicaComponent },
  { path: 'pessoa-juridica', component: PessoajuridicaComponent },
];
