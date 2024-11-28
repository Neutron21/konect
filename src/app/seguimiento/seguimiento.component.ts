import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';  // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {
  data: any =[];

  filteredData = [...this.data]; // Inicializamos los datos filtrados con todos los registros
  isSearchActive = false;
  hasArchivoColumn = false;

  constructor(
    private router: Router,
    private apiService: ApiService  // Aquí estamos inyectando ApiService
  ) {}

  ngOnInit(): void {
    // Obtener el usuario desde sessionStorage
    const user = sessionStorage.getItem('user'); 
    if (user) {
      this.apiService.queryCustom('cotizacion', 'id_usuario', user).subscribe(
        (data: any[]) => {
          this.filteredData = data;
          this.checkArchivoColumn();
        },
        (error: any) => {
          console.error('Error al obtener cotizaciones:', error);
        }
      );
    } else {
      console.error('Usuario no encontrado en sessionStorage');
    }
    
    this.checkArchivoColumn(); // Si tienes que ejecutar esta función adicionalmente
  }
  

  checkArchivoColumn(): void {
    this.hasArchivoColumn = this.filteredData.some(item => item.archivo && item.archivo.trim() !== '');
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value.trim();

    // Verifica si el término de búsqueda está vacío

  }

  navigateBack(): void {
    this.router.navigate(['/seccion']);
  }
}
