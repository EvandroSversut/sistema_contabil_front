import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html', // ✅ Usa o HTML externo
  styleUrls: ['./app.component.css']    // (opcional se tiver CSS)
})
export class AppComponent {

    constructor(private authService: AuthService) {}

     isLogado(): boolean {
    return this.authService.isLoggedIn();
  }
}
