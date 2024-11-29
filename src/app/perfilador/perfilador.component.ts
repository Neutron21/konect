import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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
  mostrarError: boolean = false; // Nueva propiedad para manejar errores
  modal: any;

  constructor(
    private router: Router,
    private apiservice: ApiService
  ) {}

  ngAfterViewInit(): void {
    if (this.successModalRef) {
      this.modal = new bootstrap.Modal(this.successModalRef.nativeElement);
    }
  }

  navigateBack(): void {
    this.router.navigate(['/seccion']);
  }

  enviarFormulario(formularioForm: any): void {
    if (!this.validarFormulario()) {
      this.mostrarError = true; // Mostrar mensaje de error
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
    this.apiservice.sendCotizacion(this.formulario).subscribe({
      next: (response) => {
        console.log('Formulario enviado con éxito:', response);
        this.showDocs = true;
      },
      error: (err) => {
        console.error('Error al enviar:', err);
      }
    });
  
    this.formularioEnviado = true;
    this.modal.show();
  
    formularioForm.resetForm();
  }
  
  

  seleccionarTipoPersona(valor: string): void {
    this.formulario.tipo_persona = valor === 'fisica' ? 'f' : 'm';
  }

  cerrarModal(formularioForm: any): void {
    this.formularioEnviado = false;
    this.modal.hide();
  
    formularioForm.resetForm(); 
  }
  
  validarFormulario(): boolean {
    const { tipo_persona, nombre, edad, monto, plazo, antiguedadEmpresa, ingresos } = this.formulario;
      return tipo_persona && nombre && edad && monto && plazo && antiguedadEmpresa && ingresos;
  }
  formatDate(fechaEnvio: string): string {
    const [fechaParte, horaParte] = fechaEnvio.split(' ');
    const [anio, mes, dia] = fechaParte.split('-');
    const fechaFormateada = `${dia}-${mes}-${anio} ${horaParte}`;
    return fechaFormateada;
  }
  goToDocs() {
    this.router.navigate(['/carga-docs']);
  }
}
