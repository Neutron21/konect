import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { financieras } from '../utils/financieras'; // Asegúrate de importar las financieras

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss']
})
export class InstitucionesComponent implements OnInit {

  financiera: any;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    const finId = sessionStorage.getItem('financiera');
    if (finId) {
      const finIdParsed = JSON.parse(finId); 

      this.financiera = financieras.find(fin => fin.id === finIdParsed);

      if (this.financiera) {
        console.log('Financiera ID:', this.financiera.id);
        console.log('Productos:', this.financiera.productos);
      } else {
        console.error('No se encontró la financiera con ese ID');
      }
    } else {
      console.error('No financiera found in sessionStorage');
    }
  }

  goToPerfilador(id: string) {
    this.router.navigate([`/perfilador`]);  
  }
}
