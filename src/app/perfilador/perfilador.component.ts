import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  // Agregar ActivatedRoute
import { ApiService } from '../services/api.service';
declare var bootstrap: any;

@Component({
  selector: 'app-perfilador',
  templateUrl: './perfilador.component.html',
  styleUrls: ['./perfilador.component.scss']
})
export class PerfiladorComponent implements AfterViewInit {
  @ViewChild('successModal') successModalRef: ElementRef | undefined;

  showDocs = true;
  formulario: any = {
    tipo_persona: '', 
    nombre: '',
    edad: null,
    monto: null,
    plazo: null,
    antiguedadEmpresa: null,
    ingresos: null,
  };

  formularioEnviado: boolean = false;
  mostrarError: boolean = false; // Propiedad para manejar errores
  modal: any;
  
  // Propiedad para almacenar el id recibido de la URL
  financieraId: string | null = null;

  constructor(
    private router: Router,
    private apiservice: ApiService,
    private route: ActivatedRoute  // Inyectar ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el 'id' de la URL
    this.financieraId = this.route.snapshot.paramMap.get('id');
    console.log('ID de la financiera:', this.financieraId);  // Verificar que el id se obtiene correctamente
  }

  ngAfterViewInit(): void {
    if (this.successModalRef) {
      this.modal = new bootstrap.Modal(this.successModalRef.nativeElement);
    }
  }

  // Método para enviar el formulario
  enviarFormulario(formularioForm: any): void {
    if (!this.validarFormulario()) {
      this.mostrarError = true; // Mostrar mensaje de error si el formulario es inválido
      return;
    }

    this.mostrarError = false; // Ocultar mensaje de error si el formulario es válido
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      this.formulario.id_usuario = userEmail;
    } else {
      console.error('No se encontró el email del usuario autenticado.');
      return;
    }

    // Llamada al servicio para enviar la cotización
    this.apiservice.sendCotizacion(this.formulario).subscribe({
      next: (response) => {
        console.log('Formulario enviado con éxito:', response);
        this.showDocs = true;  // Si se envió correctamente, se muestra el botón de Documentación
      },
      error: (err) => {
        console.error('Error al enviar:', err);
      }
    });

    this.formularioEnviado = true;
    this.modal.show(); // Mostrar modal de éxito
    formularioForm.resetForm(); // Reiniciar el formulario
  }

  // Función para seleccionar el tipo de persona
  seleccionarTipoPersona(valor: string): void {
    this.formulario.tipo_persona = valor === 'fisica' ? 'f' : 'm';
  }

  // Función para cerrar el modal de éxito
  cerrarModal(formularioForm: any): void {
    this.formularioEnviado = false;
    this.modal.hide();  // Cerrar el modal
    formularioForm.resetForm(); // Reiniciar el formulario
  }

  // Validar que todos los campos sean completados
  validarFormulario(): boolean {
    const { tipo_persona, nombre, edad, monto, plazo, antiguedadEmpresa, ingresos } = this.formulario;
    return tipo_persona && nombre && edad && monto && plazo && antiguedadEmpresa && ingresos;
  }

  // Formatear la fecha de envío (si es necesario en el futuro)
  formatDate(fechaEnvio: string): string {
    const [fechaParte, horaParte] = fechaEnvio.split(' ');
    const [anio, mes, dia] = fechaParte.split('-');
    const fechaFormateada = `${dia}-${mes}-${anio} ${horaParte}`;
    return fechaFormateada;
  }

  // Navegar a la página de carga de documentos
  goToDocs() {
    this.router.navigate(['/carga-docs']);
  }
}
