import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any = null;

  ngOnInit() {
    this.obtenerUsuario();
  }

  async obtenerUsuario() {
    try {
      // Pide los datos al backend enviando las cookies de sesión
      const response = await axios.get('http://localhost:3000/user', { withCredentials: true });
      this.user = response.data;
    } catch (error) {
      console.error('Error al obtener usuario', error);
      this.user = null;
    }
  }

  logout() {
    window.location.href = 'http://localhost:3000/logout';
  }
}