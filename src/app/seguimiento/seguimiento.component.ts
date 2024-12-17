import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {
  data: any[] = []; // Datos originales
  filteredData: any[] = []; // Datos filtrados
  isSearchActive = false; // Estado de búsqueda

  filters = {
    estatus: '',
    cotizacionNombreProspecto: '', // Nuevo campo combinado
    fechaDesde: '',
    fechaHasta: ''
  };

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = sessionStorage.getItem('user'); 
    if (user) {
      this.apiService.queryCustom('cotizacion', 'id_usuario', user).subscribe(
        (data: any[]) => {
          this.data = data; 
          this.filteredData = [...this.data]; 
        },
        (error: any) => {
          console.error('Error al obtener cotizaciones:', error);
          console.log(error);
          
          if (error.status == 401 || error.error.error.includes('Expired')) {
            console.log("Sesion expirada!");
            this.authService.logOut();
          }
        }
      );
    } else {
      console.error('Usuario no encontrado en sessionStorage');
    }
  }

  applyFilters(): void {
    this.filteredData = this.data.filter(item => {
      const matchesEstatus = this.filters.estatus
        ? item.estatus?.toLowerCase().includes(this.filters.estatus.toLowerCase())
        : true;
      const matchesCotizacionNombreProspecto = this.filters.cotizacionNombreProspecto
        ? (item.id_cotizacion?.toString().toLowerCase().includes(this.filters.cotizacionNombreProspecto.toLowerCase()) || 
           item.nombre?.toLowerCase().includes(this.filters.cotizacionNombreProspecto.toLowerCase()))
        : true;

      const matchesFechaDesde = this.filters.fechaDesde
        ? new Date(item.fecha) >= new Date(this.filters.fechaDesde)
        : true;
      const matchesFechaHasta = this.filters.fechaHasta
        ? new Date(item.fecha) <= new Date(this.filters.fechaHasta)
        : true;

      return matchesEstatus && matchesCotizacionNombreProspecto && matchesFechaDesde && matchesFechaHasta;
    });

    this.filters.estatus = '';
    this.filters.cotizacionNombreProspecto = '';
    this.filters.fechaDesde = '';
    this.filters.fechaHasta = '';

    this.isSearchActive = this.filteredData.length !== this.data.length;
  }

  verArchivo(archivoUrl: string): void {
    this.router.navigate(['/ver-archivo'], { queryParams: { archivo: archivoUrl } });
  }

  navigateBack(): void {
    this.router.navigate(['/seccion']);
  }

  navigateToVista(item: any): void {
    this.router.navigate(['/vista'], { queryParams: { id_cotizacion: item.id_cotizacion } });
  }
  
}
