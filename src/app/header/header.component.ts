import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {
    nombre: '',
  };

  constructor(
    private authServie: AuthService,
    private apiservice: ApiService,
    private router: Router // Importa el servicio Router para navegación
  ) {}

  ngOnInit(): void {
    this.validarSesion();
  }

  cerrarSesion() {
    this.apiservice.deleteToken().subscribe({
      next: (response) => {
        console.log('Borrado con éxito:', response);
      },
      error: (err) => {
        console.error('Error al borrar el token:', err);
      },
    });
    this.authServie.logOut();
  }

  validarSesion() {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      const user = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
      this.user.nombre = user.nombre || '';
      return !!sessionStorage.getItem('user');
    } else {
      return false;
    }
  }

  irASeccion() {
    this.router.navigate(['/seccion']); 
  }

  isSeccionActive(): boolean {
    return this.router.url === '/seccion';
  }
}
