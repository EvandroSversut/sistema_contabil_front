import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html', // ✅ Usa o HTML externo
  styleUrls: ['./app.component.css']    // (opcional se tiver CSS)
})
export class AppComponent {}