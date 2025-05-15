import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  logout() {
    localStorage.removeItem('token');
    window.location.href = '/'; // Volta para o login
  }
}
