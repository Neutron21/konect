import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {
  cotizacion: any = null;
  loading: boolean = false;
  errorMessage: string = '';
  documentos: any[] = [];
  idFinanciera: string | null = null;
  comentarios: any [] = [];  
  user: string | null = sessionStorage.getItem('user') || 'anónimo';
  id_cotizacion: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.idFinanciera = sessionStorage.getItem('financiera');
    const idCotizacion = this.route.snapshot.queryParams['id_cotizacion'];
  
    if (idCotizacion) {
      this.id_cotizacion = Number(idCotizacion); // Convertir id_cotizacion a número
      this.loading = true;
  
      // Obtener cotización
      this.apiService.queryCustom('cotizacion', 'id_cotizacion', idCotizacion).subscribe(
        (data) => {
          this.loading = false;
          console.log('Respuesta de la API (cotización):', data);
  
          if (data && data.length > 0) {
            this.cotizacion = data[0];
  
            const idFinanciera = data[0]?.idFinanciera || data[0]?.id_financiera || null;
            const producto = data[0]?.producto || null;
  
            if (idFinanciera) {
              sessionStorage.setItem('financiera', idFinanciera);
              console.log('ID Financiera guardado en sessionStorage:', idFinanciera);
              this.idFinanciera = idFinanciera;
            } else {
              console.warn('No se encontró el campo ID Financiera en los datos.');
            }
  
            if (producto !== null) {
              sessionStorage.setItem('producto', producto.toString());
              console.log('Producto guardado en sessionStorage:', producto);
            }
  
            this.documentos = this.extractDocumentos(data[0]?.currentFiles || []);
          } else {
            this.cotizacion = null;
            this.errorMessage = 'No se encontraron datos para la cotización.';
          }
  
          // Obtener comentarios
          this.getComentarios(idCotizacion);
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
  
  // Función para obtener comentarios
  getComentarios(idCotizacion: number): void {
    this.apiService.queryCustom('comentarios', 'id_cotizacion', idCotizacion.toString()).subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.comentarios = data; // Asignamos los comentarios obtenidos
          console.log('Comentarios cargados:', this.comentarios);
        } else {
          this.comentarios = [];
          console.warn('No se encontraron comentarios para esta cotización.');
        }
      },
      (error) => {
        console.error('Error al obtener los comentarios:', error);
      }
    );
  }
  
  
  
  
  extractDocumentos(currentFiles: any[]): string[] {
    return currentFiles.map((file) => file.nombre);
  }
  
  navigateBack(): void {
    this.router.navigate(['/seguimiento']);
  }

  agregarComentario(): void {
    if (this.comentarios) {
        const request = {
            id_cotizacion: this.id_cotizacion,
            id_usuario: this.user, // Asegúrate de que este valor está definido
            comentarios: this.comentarios,
        };

        this.apiService.sendComentarios(request).subscribe(
            (response) => {
                console.log('Comentario guardado exitosamente:', response);
                const comentarios = JSON.parse(sessionStorage.getItem('comentarios') || '[]');
                comentarios.push({
                    ...request,
                    id_comentarios: response.id_comentarios || null
                });
                sessionStorage.setItem('comentarios', JSON.stringify(comentarios));
            },
            (error) => {
                console.error('Error al guardar el comentario:', error);
            }
        );
    }
}

actualizarEstatus(event: Event, idCotizacion: any): void {
  const selectElement = event.target as HTMLSelectElement;
  const estatus = selectElement.value;

  console.log('Estatus seleccionado:', estatus);
  console.log('ID de cotización:', idCotizacion);

  if (estatus && idCotizacion) {
    const request = {
      estatus: estatus,
      id_cotizacion: idCotizacion
    };

    this.apiService.updateEstatus(request).subscribe({
      next: (response) => {
        console.log('Estatus actualizado correctamente:', response);
      },
      error: (error) => {
        console.error('Error al actualizar el estatus:', error);
        if (error.status === 400) {
          console.error('El servidor respondió con un Bad Request. Verifica los datos enviados.');
        }
      }
    });
  } else {
    console.error('Datos incompletos: Estatus o ID de cotización faltantes');
  }
}

}
