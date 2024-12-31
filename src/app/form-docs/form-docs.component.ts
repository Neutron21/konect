import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { documentacion } from '../utils/documentos';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Modal } from 'bootstrap';


// declare var bootstrap: any;
@Component({
  selector: 'app-form-docs',
  templateUrl: './form-docs.component.html',
  styleUrls: ['./form-docs.component.scss']
})
export class FormDocsComponent implements OnInit {

  @Input() request!: any;
  @Input() isNew!: boolean;

  @Output() messageEmitter = new EventEmitter<boolean>();
  // @ViewChild('emptyFilesModal') successModalRef: ElementRef | undefined;

  fileUpload: any;
  currentFiles: any[] = [];
  viabilidad: any[] = [];
  fileList: any[] = []; // Lista comodin para la carga de archivos al servidor
  idCotizacion: number = 0;
  idFin!: string;
  product!: number;
  emptyFilesError: boolean = false;
  modal: any;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getFinAndProduct();
    console.log('FormDocsComponent inicializado');
  }
  // ngAfterViewInit(): void {
  //   if (this.successModalRef) {
  //     this.modal = new bootstrap.Modal(this.successModalRef.nativeElement);
  //   }
  // }
  getFinAndProduct() {

    const financiera = sessionStorage.getItem("financiera");
    const producto = sessionStorage.getItem("producto");

    // Verifica si los valores están definidos
    if (!financiera || !producto) {
      console.error("Error: 'financiera' o 'producto' no están definidos en sessionStorage.");
      return;
    }

    this.idFin = "F" + financiera;
    this.product = Number(producto) + 1;
    const productoFormat = "p" + this.product;

    console.log("idFin:", this.idFin);
    console.log("productoFormat:", productoFormat);

    // Valida que las propiedades existan en `documentacion`
    if (!documentacion[this.idFin]) {
      console.error(`Error: No existe '${this.idFin}' en 'documentacion'.`);
      return;
    }

    if (!documentacion[this.idFin][productoFormat]) {
      console.error(`Error: No existe '${productoFormat}' en 'documentacion[${this.idFin}]'.`);
      return;
    }

    // Asignación segura de valores
    this.currentFiles = documentacion[this.idFin][productoFormat].documentos || [];
    this.viabilidad = documentacion[this.idFin].viabilidad || [];

    if (this.viabilidad.length > 0) {
      this.viabilidad.forEach(v => {
        v.showDesc = false;
      });
    }
  }

  onFileSelect(event: any, nameFile: string) {
    const file = event.target.files[0];
    console.log(event.target.files);
    
    const allowedExtensions = ['pdf', 'PDF', 'jpg', 'JPG', 'zip', 'ZIP', 'rar', 'RAR'];

    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        const customFileName = `${nameFile}.${fileExtension}`;
        this.fileUpload = { file, customName: customFileName };
        console.log('Archivo permitido:', this.fileUpload);
        this.validarExistencias(nameFile);
      } else {
        alert('Solo se permiten archivos de tipo PDF, JPG, ZIP, o RAR.');
        this.fileUpload = null;
        event.target.value = '';
      }
    }
  }

  validarExistencias(name: string) {
    const indice = this.fileList.findIndex(el => el.customName.includes(name));
    if (indice >= 0) {
      this.fileList[indice] = this.fileUpload;
    } else {
      this.fileList.push({ ...this.fileUpload });
    }
    console.log('Archivos en lista:', this.fileList);
  }


  sendDocs() { 

    const cotizacion = this.idCotizacion!=0 ? btoa(this.idCotizacion+"") : "";
    console.log(this.fileList);
    const formData = new FormData();
    const user = sessionStorage.getItem('user') || "";

    formData.append('user', user);
    formData.append('idCotizacion', cotizacion);

    this.fileList.forEach((document, index) => {
      formData.append(`file${index}`, document.file);
      formData.append(`customName${index}`, document.customName);
    });

    console.log('Contenido de FormData:');
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    this.apiService.upLoadFiles(formData).subscribe({
      next: (response) => {
        console.log('Datos enviados con éxito:', response);
        // Disparar correos
      },
      error: (error) => {
        console.error('Error al enviar los datos:', error);
        this.authService.validarErrorApi(error);
      }
    });
  }
  preparandoCotizacion() {
    if (!this.validarFormulario()) {
      this.sendMessage(true);
      return;
    } 
    console.log(this.request);
    if (this.fileList.length == 0) {
      this.emptyFilesError = true;
      const modalElement = document.getElementById('staticBackdrop');
      if (modalElement) {
        const modal = new Modal(modalElement);
        modal.show();
      }
      return;
    }

    const userEmail = sessionStorage.getItem('user');
    if (userEmail) {
      this.request.id_usuario = userEmail;
    } else {
      console.error('No se encontró el email del usuario autenticado.');
      return;
    }
    this.request.estatus = 'Integración'; // Estado inicial del credito
    this.request.id_financiera = sessionStorage.getItem('financiera');
    this.request.producto = sessionStorage.getItem('producto');

    this.apiService.sendCotizacion(this.request).subscribe({
      next: (response) => {
        console.log('cotizacion enviada con éxito:', response);
        // mandar llamar la carga de doccuemntos
        this.preSendDocs(response);
      },
      error: (error) => {
        console.error('Error al enviar:', error);
        this.authService.validarErrorApi(error);
      }
    });
  }
  preSendDocs(response: any) {
    sessionStorage.setItem(response.data.id_cotizacion, 'idCotizacion');
    this.idCotizacion = response.data.id_cotizacion;
    this.sendDocs();
   
  }
  validarFormulario(): boolean {
    const { tipo_persona, nombre, edad, monto, plazo, antiguedadEmpresa, ingresos } = this.request;
    return tipo_persona && nombre && edad && monto && plazo && antiguedadEmpresa && ingresos;
  }
  sendMessage(message: boolean) {
    this.messageEmitter.emit(message);
  }
  toggleDescription(v: any): void {
    v.showDesc = !v.showDesc;
  }
}
