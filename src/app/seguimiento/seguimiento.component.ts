import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {
  data: any[] = []; // Datos originales
  filteredData: any[] = []; // Datos filtrados
  isSearchActive = false; // Estado de búsqueda

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Obtener el usuario desde sessionStorage
    const user = sessionStorage.getItem('user'); 
    if (user) {
      this.apiService.queryCustom('cotizacion', 'id_usuario', user).subscribe(
        (data: any[]) => {
          this.data = data; // Asignar datos originales
          this.filteredData = [...this.data]; // Copiar a datos filtrados
        },
        (error: any) => {
          console.error('Error al obtener cotizaciones:', error);
        }
      );
    } else {
      console.error('Usuario no encontrado en sessionStorage');
    }
  }



  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value.trim().toLowerCase();

    if (searchTerm) {
      this.isSearchActive = true;
      // Filtrar los datos basándose en el término de búsqueda
      this.filteredData = this.data.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm)
        )
      );
    } else {
      this.isSearchActive = false;
      this.filteredData = [...this.data]; // Restablecer los datos si no hay búsqueda
    }
  }
  verArchivo(archivoUrl: string): void {
    // Redirigir al componente de visualización
    this.router.navigate(['/ver-archivo'], { queryParams: { archivo: archivoUrl } });
  }

  navigateBack(): void {
    this.router.navigate(['/seccion']);
  }
  navigateToVista(item: any): void {
    this.router.navigate(['/vista'], { queryParams: { id: item.id_cotizacion } });
  }
  
  

}
