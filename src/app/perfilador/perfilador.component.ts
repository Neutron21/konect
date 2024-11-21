import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilador',
  templateUrl: './perfilador.component.html',
  styleUrls: ['./perfilador.component.scss']
})
export class PerfiladorComponent {

  constructor(private router: Router) {}

  navigateBack(): void {
    this.router.navigate(['/seccion']);
  }
}
