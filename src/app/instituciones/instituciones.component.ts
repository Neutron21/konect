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
    productoDetalles: any = null;


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

  goToPerfilador(id: number) {
    if (id !== null && id !== undefined) { // Comprobar explícitamente que no sea null o undefined
      console.log('Navegando al perfilador con producto ID:', id);
      sessionStorage.setItem('producto', id.toString());
      this.router.navigate([`/perfilador`]);
    } else {
      console.error('El ID del producto es inválido:', id);
    }
  }
  
  
}