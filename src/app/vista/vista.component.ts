import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

interface Cotizacion {
  id_cotizacion: string | null;  
  estatus: string | null;        
  nombre: string | null;         
  edad: string | null;           
  monto: string | null;          
  tipo_persona: string | null;   
}


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {
  cotizacion: Cotizacion | null = null; 
  loading: boolean = false;  
  errorMessage: string = '';  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Obtener el ID de cotización de los parámetros
    const idCotizacion = this.route.snapshot.queryParams['id_cotizacion'];

    if (idCotizacion) {
      this.loading = true;
      this.apiService.queryCustom('cotizacion', 'id_cotizacion', idCotizacion).subscribe(
        (data) => {
          this.loading = false; 
          if (data && data.length > 0) {
            this.cotizacion = data[0]; 
          } else {
            this.cotizacion = null;
            this.errorMessage = 'No se encontraron datos para la cotización.';
          }
        },
        (error) => {
          this.loading = false; 
          this.cotizacion = null;
          this.errorMessage = 'Error al obtener la cotización: ' + error.message;
        }
      );
    } else {
      this.errorMessage = 'No se proporcionó un ID de cotización válido.';
    }
  }
  
  navigateBack(): void {
    this.router.navigate(['/seguimiento']);
  }
}
