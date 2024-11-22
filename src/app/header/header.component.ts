import { Component, OnInit } from '@angular/core';
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
    private apiservice: ApiService

  ) {}

  ngOnInit(): void {
    this.validarSesion();
  }

  cerrarSesion() {
    this.apiservice.deleteToken().subscribe ({
      next:(response) => {
        console.log('Borrado con éxito:', response);
      },
      error: (err) => {
        console.error('Error al borrar el token:', err);
      }
    });
    this.authServie.logOut();
  }

  validarSesion() {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      const usuario = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
      this.user.nombre = usuario.nombre || '';
      return !!sessionStorage.getItem('uid');
    } else {
      return false;
    }
  }
}
