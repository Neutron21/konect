import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import Modal from 'bootstrap/js/dist/modal';
import { AuthService } from '../services/auth.service';
import { financieras } from '../utils/financieras';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {
  cotizacion: any = null;
  loading: boolean = false;
  loadingComentario: boolean = false;
  errorMessage: string = '';
  documentos: any[] = [];
  idFinanciera: string | null = null;
  comentarios: any [] = [];  
  user: string | null = sessionStorage.getItem('user');
  id_cotizacion: number = 0;
  nuevoComentario: string = '';
  estatusSeleccionado: string = '';
  estatusOriginal: string = '';
  nombreProducto: string = ''; // Para almacenar el nombre desde utils
producto: string = '';  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.idFinanciera = sessionStorage.getItem('financiera');
    const idCotizacion = this.route.snapshot.queryParams['id_cotizacion'];
    if (idCotizacion) {
      this.id_cotizacion = Number(idCotizacion); 
      this.loading = true;
      this.apiService.queryCustom('cotizacion', 'id_cotizacion', idCotizacion).subscribe(
        (data) => {
          this.loading = false;
          console.log('Respuesta de la API (cotización):', data);
  
          if (data && data.length > 0) {
            this.cotizacion = data[0];
  
            const idFinanciera = data[0]?.idFinanciera || data[0]?.id_financiera;
  
            // Asegúrate de acceder al objeto id y luego a la propiedad nombre.
            const nombreProducto = data[0]?.id?.nombre || 'Nombre no definido';
            const producto = data[0]?.producto;
            
            this.estatusOriginal = data[0]?.estatus;
            sessionStorage.setItem('financiera', idFinanciera);
            console.log('ID Financiera guardado en sessionStorage:', idFinanciera);
            this.idFinanciera = idFinanciera;
  
            sessionStorage.setItem('producto', producto?.toString());
            console.log('Producto guardado en sessionStorage:', producto);
  
            console.log('Nombre del Producto:', nombreProducto);  // Aquí se accede al nombre
          }
  
          this.getComentarios(idCotizacion);
        },
        (error) => {
          this.loading = false;
          this.errorMessage = 'Error al obtener la cotización: ' + error.message;
          this.authService.validarErrorApi(error);
        }
      );
    } else {
      this.errorMessage = 'No se proporcionó un ID de cotización válido.';
    }
  }
  
  
  getComentarios(idCotizacion: number): void {
    this.apiService.queryCustom('comentarios', 'id_cotizacion', idCotizacion.toString()).subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.comentarios = data;
          console.log('Comentarios cargados:', this.comentarios); 
        } else {
          console.warn('No se encontraron comentarios para esta cotización.');
        }
      },
      (error) => {
        console.error('Error al obtener los comentarios:', error);
        this.authService.validarErrorApi(error);
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
    const request = {
      id_cotizacion: this.id_cotizacion,
      id_usuario: this.user,
      comentarios: this.nuevoComentario,
    };
    console.log('Enviando comentario:', request);
  
    this.loadingComentario = true;  
  
    this.apiService.sendComentarios(request).subscribe(
      (response) => {
        console.log('Comentario guardado exitosamente:', response);
        this.nuevoComentario = '';
        this.getComentarios(this.id_cotizacion);
        this.loadingComentario = false; 
      },
      (error) => {
        console.error('Error al guardar el comentario:', error);
        this.loadingComentario = false;  
        this.authService.validarErrorApi(error);
      }
    );
  }
  
  actualizarEstatus(event: Event, idCotizacion: any): void {
    const selectElement = event.target as HTMLSelectElement;
  
    this.estatusSeleccionado = selectElement.value; 
    console.log('Estatus seleccionado temporalmente:', this.estatusSeleccionado);
  
    const modalElement = document.getElementById('estatusModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }
  confirmarCambioEstatus(idCotizacion: any): void {
    if (this.estatusSeleccionado && idCotizacion) {
      const request = {
        estatus: this.estatusSeleccionado,
        id_cotizacion: idCotizacion,
      };

      this.apiService.updateEstatus(request).subscribe({
        next: (response) => {
          console.log('Estatus actualizado correctamente:', response);

          this.nuevoComentario = `El estatus se cambió a: ${this.estatusSeleccionado}`;
          this.agregarComentario();
        },
        error: (error) => {
          console.error('Error al actualizar el estatus:', error);
          this.authService.validarErrorApi(error);
        },
      });
    } else {
      console.error('Datos incompletos: Estatus o ID de cotización faltantes');
    }
  }

  cancelarCambioEstatus(): void {
    this.cotizacion.estatus = this.estatusOriginal;
    console.log('Cambio de estatus cancelado. Restaurado a:', this.estatusOriginal);
  }
}
  


