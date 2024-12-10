import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para redirección
import { AuthService } from 'src/app/services/auth.service'; // Importar el AuthService

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    private router: Router, 
    private authService: AuthService // Inyectar AuthService
  ) { }

  redirectToLogin() {
    this.authService.logOut();

    this.router.navigate(['/login']);
  }
}
