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
  formulario: any = {
    tipo_persona: '', 
    nombre: '',
    edad: null,
    monto: null,
    plazo: null,
    antiguedadEmpresa: null,
    ingresos: null,
  };

  formularioError: boolean = false;
  formularioEnviado: boolean = false;
  modal: any;

  constructor
  (private router: Router,
   private apiservice: ApiService

  ) {}

  ngAfterViewInit(): void {
    // Asegurarse de que el modal se inicialice después de que el DOM esté disponible
    if (this.successModalRef) {
      this.modal = new bootstrap.Modal(this.successModalRef.nativeElement);
    }
  }

  navigateBack(): void {
    this.router.navigate(['/seccion']);
  }

  enviarFormulario(formularioForm: any): void {
    if (!this.formulario.tipo_persona || !this.formulario.nombre || !this.formulario.edad || !this.formulario.monto || !this.formulario.plazo || !this.formulario.antiguedadEmpresa || !this.formulario.ingresos) {
      this.formularioError = true;
      return;
    }
  this.apiservice.sendCotizacion(this.formulario).subscribe ({
    next:(response) => {
      console.log('enviado con exico:', response);
    },
    error: (err) => {
      console.error('Error al enviar:', err);
    }
  });
  

    this.formularioError = false;

    // Lógica de procesamiento sin hacer peticiones HTTP
    console.log('Formulario enviado con éxito:', this.formulario);

    // Marcar que el formulario se ha enviado
    this.formularioEnviado = true; // Mostrar el modal

    // Abrir el modal de Bootstrap
    this.modal.show();

    // Limpiar los campos del formulario
    this.formulario = {
      tipo_persona: '',
      nombre: '',
      edad: null,
      monto: null,
      plazo: null,
      antiguedadEmpresa: null,
      ingresos: null,
    };

    // Limpiar los estados de validación del formulario
    formularioForm.resetForm();
  }

  seleccionarTipoPersona(valor: string): void {
    this.formulario.tipo_persona = valor === 'fisica' ? 'f' : 'm';
  }

  cerrarModal(formularioForm: any): void {
    this.formularioEnviado = false;
    // Cerrar el modal
    this.modal.hide();

    // Limpiar los datos del formulario y restablecer validación
    this.formulario = {
      tipo_persona: '',
      nombre: '',
      edad: null,
      monto: null,
      plazo: null,
      antiguedadEmpresa: null,
      ingresos: null,
    };
    // Restablecer el formulario a su estado inicial (sin errores ni valores)
    formularioForm.resetForm();
  }
}
