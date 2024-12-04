import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss']
})
export class InstitucionesComponent implements OnInit {

  financiera: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedFinanciera = sessionStorage.getItem('financiera');
    console.log('Stored Financiera:', storedFinanciera); // Depuración
    if (storedFinanciera) {
      this.financiera = JSON.parse(storedFinanciera);
    } else {
      console.error('No financiera found in sessionStorage');
    }
  }

  goToPerfilador(id: string) {
    this.router.navigate([`/perfilador`]);  
  }
}