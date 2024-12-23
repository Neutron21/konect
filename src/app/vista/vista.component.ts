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
  comentario: string = '';  
  user: string | null = sessionStorage.getItem('user');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.idFinanciera = sessionStorage.getItem('financiera');
    const idCotizacion = this.route.snapshot.queryParams['id_cotizacion'];
  
    if (idCotizacion) {
      this.loading = true;
      this.apiService.queryCustom('cotizacion', 'id_cotizacion', idCotizacion).subscribe(
        (data) => {
          this.loading = false;
          console.log('Respuesta de la API:', data);
  
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
    return currentFiles.map((file) => file.nombre);
  }
  
  navigateBack(): void {
    this.router.navigate(['/seguimiento']);
  }
  agregarComentario(): void {
    if (this.comentario.trim() !== '') {
        const comentarios = JSON.parse(sessionStorage.getItem('comentarios') || '[]');
        const nuevoComentario = [
            this.user,                
            this.comentario,          
            new Date().toISOString() 
        ];
        comentarios.push(nuevoComentario);
        sessionStorage.setItem('comentarios', JSON.stringify(comentarios));
        this.comentario = '';
        console.log('Comentario guardado en sessionStorage:', nuevoComentario);
    }
}





}
