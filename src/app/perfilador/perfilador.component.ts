import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { financieras } from '../utils/financieras';

declare var bootstrap: any;

@Component({
  selector: 'app-perfilador',
  templateUrl: './perfilador.component.html',
  styleUrls: ['./perfilador.component.scss']
})
export class PerfiladorComponent implements AfterViewInit {

  @ViewChild('successModal') successModalRef: ElementRef | undefined;

  nameFin = '';
  nameProd = '';
  formulario: any = {
    tipo_persona: '', 
    nombre: '',
    edad: null,
    monto: null,
    plazo: null,
    antiguedadEmpresa: null,
    ingresos: null,
  };
  plazos: number[] = [];
  docProcess: boolean = false;
  viabilidad: boolean = false;
  urlFin: string | undefined = '';

  formularioEnviado: boolean = false;
  mostrarError: boolean = false; 
  modal: any;
  finacieraId: number = 0;
  productIndex: number = 0;

  constructor(
    private router: Router,
    private apiservice: ApiService
  ) {
    this.generarPlazos();

  }

  ngOnInit(): void {
    this.getFinanciera();
  }

  ngAfterViewInit(): void {
    if (this.successModalRef) {
      this.modal = new bootstrap.Modal(this.successModalRef.nativeElement);
    }
  }
  generarPlazos(): void {
    for (let i = 12; i <= 120; i += 12) {
      this.plazos.push(i);
    }
  }
  getFinanciera() {
    const idFin = JSON.parse(sessionStorage.getItem("financiera") + "");
    this.finacieraId = Number(idFin);
    const currentProduct = JSON.parse(sessionStorage.getItem("producto") + "");
    this.productIndex = Number(currentProduct);
    console.log(idFin);
    const institucion = financieras.find(el => el.id == idFin);
    this.docProcess = institucion?.proceso == "mail";
    this.viabilidad = !!institucion?.viabilidad;
    this.urlFin = !this.docProcess ? institucion?.url : '';
    this.nameFin = institucion?.nombre + "";
    this.nameProd = institucion?.productos[currentProduct] + "";
    console.log(institucion);
    console.log("docProcess", this.docProcess);
    console.log("viabilidad", this.viabilidad);
    
  }
  enviarFormulario(formularioForm: any): void {
    if (!this.validarFormulario()) {
      this.mostrarError = true; 
      return;
    }

    this.mostrarError = false; 
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      this.formulario.id_usuario = userEmail;
    } else {
      console.error('No se encontró el email del usuario autenticado.');
      return;
    }
    this.formulario.id_financiera = this.finacieraId;
    this.formulario.producto = this.productIndex;

    this.apiservice.sendCotizacion(this.formulario).subscribe({
      next: (response) => {
        console.log('Formulario enviado con éxito:', response);
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

  onlyText(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    // Permitir letras mayúsculas (65-90), letras minúsculas (97-122), espacios (32), y acentos (á: 225, é: 233, í: 237, ó: 243, ú: 250, ü: 252, ñ: 241)
        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode !== 32 &&
        charCode !== 225 && charCode !== 233 && charCode !== 237 && charCode !== 243 && charCode !== 250 &&
        charCode !== 252 && charCode !== 241 && charCode !== 8) {
            // event.preventDefault();
            return false;
        }
        return true;
  }
  
  onlyNumbers(event: KeyboardEvent){
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
        // event.preventDefault();
        return false;
    } else {
        return true;
    }
  }
  descargarImagen(url: string, nombreArchivo: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = nombreArchivo;
    link.click();
  }

  descargarPDF(url: string, nombreArchivo: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = nombreArchivo;
    link.click();
  }
}