import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent {

  constructor(private router: Router) { }

  navigateBack(): void {
    this.router.navigate(['/seccion']);
  }
  
}
