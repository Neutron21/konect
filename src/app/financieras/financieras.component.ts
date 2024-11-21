import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financieras',
  templateUrl: './financieras.component.html',
  styleUrls: ['./financieras.component.scss']
})
export class FinancierasComponent {

  constructor(
    private router: Router) {}

  navigateBack(): void {
    this.router.navigate(['/seccion']);
  }
}
