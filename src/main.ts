import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { CadastroComponent } from './app/pages/cadastro/cadastro.component';
import { LoginComponent } from './app/pages/login/login.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'cadastro', component: CadastroComponent }
    ])
  ]
});
