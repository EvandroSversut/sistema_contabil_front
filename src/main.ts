import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { CadastroComponent } from './app/pages/cadastro/cadastro.component';
import { LoginComponent } from './app/pages/login/login.component';
import { authInterceptor } from './app/auth.interceptor';
import { HomeComponent } from './app/pages/home/home.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'home', component: HomeComponent } // 👈 aqui
    ])
  ]
});
