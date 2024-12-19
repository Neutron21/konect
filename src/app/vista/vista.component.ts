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
  currentFiles?: { nombre: string; desc?: string }[]; // Agregado si los documentos vienen de esta forma
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
  documentos: string[] = []; // Lista para almacenar los nombres de los documentos

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const idCotizacion = this.route.snapshot.queryParams['id_cotizacion'];

    if (idCotizacion) {
      this.loading = true;
      this.apiService.queryCustom('cotizacion', 'id_cotizacion', idCotizacion).subscribe(
        (data) => {
          this.loading = false; 
          if (data && data.length > 0) {
            this.cotizacion = data[0];
            this.documentos = this.extractDocumentos(data[0]?.currentFiles || []); // Extrae los nombres de los documentos
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

  extractDocumentos(currentFiles: any[]): string[] {
    return currentFiles.map((file) => file.nombre); // Mapea solo el nombre de cada documento
  }

  navigateBack(): void {
    this.router.navigate(['/seguimiento']);
  }
}
