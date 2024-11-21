import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {
    nombre: '',
  };

  constructor(private authServie: AuthService) {}

  ngOnInit(): void {
    this.validarSesion();
  }

  cerrarSesion() {
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
