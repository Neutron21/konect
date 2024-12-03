import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {
  cotizacion: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Obtener el ID de cotización de los parámetros
    const idCotizacion = this.route.snapshot.queryParams['id_cotizacion'];
  
    if (idCotizacion) {
      // Llamar a la API para obtener los datos de la cotización
      this.apiService.queryCustom('cotizacion', 'id_cotizacion', idCotizacion).subscribe(
        (data) => {
          if (data && data.length > 0) {
            this.cotizacion = data[0]; // Asignar los datos de la cotización
          } else {
            console.warn('No se encontraron datos para la cotización.');
          }
        },
        (error) => {
          console.error('Error al obtener la cotización:', error);
        }
      );
    } else {
      console.error('No se proporcionó un ID de cotización válido.');
    }
  }
  
  navigateBack(): void {
    this.router.navigate(['/seguimiento']);
  }

 
}
