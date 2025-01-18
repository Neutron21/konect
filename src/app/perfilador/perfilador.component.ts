import { Component, AfterViewInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { financieras } from '../utils/financieras';
import { MailService } from '../services/mail.service';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-perfilador',
  templateUrl: './perfilador.component.html',
  styleUrls: ['./perfilador.component.scss']
})
export class PerfiladorComponent  {

  @Input() request!: any;
  @Input() isNew!: boolean;

  @Output() messageEmitter = new EventEmitter<boolean>();
  @Output() reset = new EventEmitter();

  isExpanded = false;
  nameFin = '';
  nameProd: any = null;
  cotizacion: any = {
    tipo_persona: 'f', 
    nombre: '',
    edad: null,
    monto: null,
    plazo: null,
    antiguedadEmpresa: null,
    ingresos: null,
    rfc: null,
  };
  plazos: number[] = [];
  docProcess: boolean = false;
  viabilidad: boolean = false;
  urlFin: string | undefined = '';

  formularioEnviado: boolean = false;
  mostrarError: boolean = false; 
  finacieraId: number = 0;
  productIndex: number = 0;
  productoDetalles: any = {};
  textModal: string = '';
  modalElement: any;
  modal: any;


  constructor(
    private apiService: ApiService,
    private mailService: MailService,
    private authService: AuthService
  ) {
    this.generarPlazos();
  }

  ngOnInit(): void {
    this.modalElement = document.getElementById('successModal');
    this.modal = new Modal(this.modalElement);
    this.getFinanciera();
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

    const institucion = financieras.find(el => el.id == idFin);
    console.log(institucion?.productos![currentProduct]);
    this.productoDetalles = institucion?.productos![currentProduct]
    this.docProcess = institucion?.proceso == "mail";
    this.viabilidad = !!institucion?.viabilidad;
    this.urlFin = !this.docProcess ? institucion?.url : '';
    this.nameFin = institucion?.nombre + "";
    this.nameProd = (institucion?.productos![currentProduct] as { name: string }).name;
    console.log(this.nameProd);
    console.log("docProcess", this.docProcess);
    console.log("viabilidad", this.viabilidad);

  }
 
  enviarFormulario(formularioForm: any): void {
    if (!this.validarFormulario()) {
      this.mostrarError = true;
      return;
    }
  
    this.mostrarError = false;
    this.cotizacion.id_usuario = sessionStorage.getItem('userEmail');
    this.cotizacion.estatus = 'Integración';
  
    this.cotizacion.id_financiera = this.finacieraId;
    this.cotizacion.producto = this.productIndex;
  
    this.apiService.sendCotizacion(this.cotizacion).subscribe({
      next: (response) => {
        console.log('Cotización enviada con éxito:', response);
        // Proceder con el envío de correos
        this.textModal = 'Proceso registrado con éxito!'
        this.modal.show()
      },
      error: (err) => {
        this.modal.hide()
        this.textModal = 'Error al crear Folio'
        console.error('Error al enviar:', err);
        this.authService.validarErrorApi(err);
      }
    });
  
    this.formularioEnviado = true;
    formularioForm.resetForm();
  }
  

  preSendDocs(response: any) {
  
    sessionStorage.setItem('cotizacion', JSON.stringify(response.data) );
    sessionStorage.setItem('idCotizacion',response.data.id_cotizacion);
    this.cotizacion = response.data.id_cotizacion;

  }
  sendMails() {
    this.mailService.sendMails(true).subscribe({
      next: (response) => {
        console.log('Envio de correo:', response);
      }, error: (err) => {
        console.error('Error al enviar los datos:', err);
      }
    });
  }

  validarFormulario(): boolean {
  
    const { tipo_persona, nombre, edad, monto, plazo, antiguedadEmpresa, ingresos, rfc } = this.cotizacion;
    return !!tipo_persona && !!nombre && !!edad && !!monto && !!plazo && !!antiguedadEmpresa && !!ingresos && !!rfc;
  }

  formatDate(fechaEnvio: string): string {
    const [fechaParte, horaParte] = fechaEnvio.split(' ');
    const [anio, mes, dia] = fechaParte.split('-');
    const fechaFormateada = `${dia}-${mes}-${anio} ${horaParte}`;
    return fechaFormateada;
  }

  // Método para manejar el evento del hijo
  mostrarErrorFunc(message: boolean) {
    this.mostrarError = message;
  }
  resetForm() {
    this.cotizacion = {
      tipo_persona: 'f', 
      nombre: '',
      edad: null,
      monto: null,
      plazo: null,
      antiguedadEmpresa: null,
      ingresos: null,
      rfc: null,
    };
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
  toggleAccordion() {
    this.isExpanded = !this.isExpanded;
  }
  
}