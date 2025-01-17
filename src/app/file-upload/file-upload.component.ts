import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { MailService } from '../services/mail.service';
import { documentacion } from '../utils/documentos';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @Input() request!: any; // Formulario de cotizacion
  @Input() isNew!: boolean; // identifica si es cotizacion nueva o no

  @Output() messageEmitter = new EventEmitter<boolean>(); // Lanza mensaje de error, si faltan campos
  @Output() reset = new EventEmitter<boolean>(); // Limpia formulario
  
  fileUpload: any;
  currentFiles: any[] = [];
  viabilidad: any[] = [];
  fileList: any[] = []; // Lista comodin para la carga de archivos al servidor
  idCotizacion: number = 0;
  idFin!: string;
  product!: number;
  emptyFilesError: boolean = false;
  filesServer: string[] = [];
  textModal: string = ''
  modalElement: any;
  modal: any;
  loader: boolean = false;
  inputFile: any;
  currentFilesInit: any[] = [];
  viabilidadInit: any[] = [];

  constructor(
      private apiService: ApiService,
      private authService: AuthService,
      private mailService: MailService
    ) { }
  
    ngOnInit(): void {
      this.modalElement = document.getElementById('noFilesModal');
      this.modal = new Modal(this.modalElement); // se inicializa en el OnInit
      this.getFinAndProduct();
      if (!this.isNew) {
        this.getFiles();
      }
    }
    getFinAndProduct() {
      // obtiene la financiera y el producto, para obtener la checklist correspondiente
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
      
      // Se crea un estado inicial, para poder hacer un reset
      this.currentFilesInit = JSON.parse(JSON.stringify(this.currentFiles));
      this.viabilidadInit = JSON.parse(JSON.stringify(this.viabilidad)); 
      this.currentFiles.forEach(cf => {
        cf.showDesc = false;
        cf.tempName = ''
      });
      if (this.viabilidad.length > 0) {
        this.viabilidad.forEach(v => {
          v.showDesc = false;
          v.tempName = ''
        });
      }
    }
    getFiles() {
      // Obtenemos los archivos cargados previamente
      const cotizacion = JSON.parse(sessionStorage.getItem('cotizacionActual')+"") 
      this.apiService.getDocs(cotizacion.id_cotizacion).subscribe(
        (data: any[]) => { 
          console.log("Files",data);
            const tempArrayDocs = data.map(el => (
            el.split('.')[0]
          ));
          console.log('tempArrayDocs',tempArrayDocs);
          
          this.validateServerDocs(tempArrayDocs);
        },
        (error: any) => {
          console.error('Error al obtener cotizaciones:', error);
          
          if (error.status == 401 || error.error.error.includes('Expired')) {
            console.log("Sesion expirada!");
            this.authService.logOut();
          }
        }
      );
    }
  
  onFileChange(event: any, index: number, type: string, nombre: string): void {
    // Método para manejar el cambio de archivo
    const file = event.target.files[0]; 
    if (file) {
      const allowedExtensions = ['pdf', 'PDF', 'jpg', 'JPG', 'zip', 'ZIP', 'rar', 'RAR'];
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
          
        const customFileName = `${nombre}.${fileExtension}`;
        this.fileUpload = { file, customName: customFileName };
        this.validarExistencias(nombre);

        switch(type) {
          case 'v':

            this.viabilidad[index].tempName = file.name
            break
          case 'd':

            this.currentFiles[index].tempName = file.name
            break
        }
      } else {
        alert('Solo se permiten archivos de tipo PDF, JPG, ZIP, o RAR.');
        this.fileUpload = null;
        event.target.value = '';
      }
    }
  }
  
  openFileDialog(inputFile: HTMLInputElement, file: any): void {
    if (!this.isNew && file.ready) { // Si es cotizacion existente y el archivo ya se cargo antes 
      
      const modalElement = document.getElementById('replaceFileModal');
      if (modalElement) {
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();
        this.inputFile = inputFile;
      }
      
    } else {
      inputFile.click(); // Simula el clic en el input de tipo file
    }
  }
  
  confirmOverWrite() {
    this.inputFile.click()
  }
  
  // Método para restablecer el nombre, color del archivo y eliminar el archivo del input
  resetFile(inputFile: HTMLInputElement, index: number, type: string): void {
    
    if (type=='v') {
      this.viabilidad[index].tempName = ''
    } else if (type=='d') {
      this.currentFiles[index].tempName = ''
    }
    // despues de borrar los archivos en la vista, se borra en la lista que se manda al servidor
    const fileNameToDel = inputFile.value.split('\\').pop();
    inputFile.value = ''; 
    const newArray = this.fileList.filter(item => item.file.name !== fileNameToDel);
    this.fileList = newArray;
    
  }
  
  
    onFileSelect(event: any, nameFile: string) {
      const file = event.target.files[0];
      
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
  
    preparandoCotizacion() {
      
      if (!this.validarFormulario()) {
          this.textModal = 'Todos los campos son obligatorios para continuar.'
          this.modal.show();
          this.sendMessage(true);
          return;
      } 
      this.sendMessage(false);
      console.log(this.request);
      if (this.fileList.length == 0) {
        this.emptyFilesError = true;
        this.textModal = this.viabilidad.length > 0 
          ? 'Debes de cargar todos los archivos de viabilidad' 
          : 'Debes cargar al menos un archivo';
        this.modal.show();
        return;
      }
      this.textModal = ''
      this.loader = true;
      this.modal.show();
      const userEmail = this.authService.getUser();
      if (userEmail) {
        this.request.id_usuario = userEmail;
      } else {
        console.error('No se encontró el email del usuario autenticado.');
        return;
      }
      this.request.estatus = this.viabilidad.length > 0 ? 'Viabilidad' : 'Integración'; // Estado inicial del credito
      this.request.id_financiera = sessionStorage.getItem('financiera');
      this.request.producto = sessionStorage.getItem('producto');
  
      this.apiService.sendCotizacion(this.request).subscribe({
        next: (response) => {
          // mandar llamar la carga de doccuemntos con el idCotizacion
          this.preSendDocs(response);
        },
        error: (error) => {
          this.textModal = 'Error al crear Folio'
          this.loader = false;
          console.error('Error al enviar:', error);
          this.authService.validarErrorApi(error);
        }
      });
    }
    
    preSendDocs(response: any) {
  
      sessionStorage.setItem('cotizacion', JSON.stringify(response.data));
      sessionStorage.setItem('idCotizacion',response.data.id_cotizacion);
      this.idCotizacion = response.data.id_cotizacion;
      this.sendDocs();
  
    }
    sendDocs() { 
      
      const cotizacion = this.idCotizacion!=0 ? btoa(this.idCotizacion+"") : "";

      const formData = new FormData();
      const user = this.authService.getUser() || "";
  
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
         this.sendMails()
        },
        error: (error) => {
          this.textModal = 'Error al cargar Documentos'
          this.loader = false;
          console.error('Error al enviar los datos:', error);
          this.authService.validarErrorApi(error);
        }
      });
    }
    updateDocs() {
      if (this.fileList.length == 0) {
        this.textModal = 'Debes cargar al menos un archivo';
        const modal = new Modal(this.modalElement);
        modal.show();
        return
      }
      this.textModal = ''
      this.loader = true;
      this.modal.show();
      if (!this.isNew) {
        this.idCotizacion = JSON.parse(sessionStorage.getItem('cotizacionActual')+"").id_cotizacion
        this.sendDocs()
      }
    }
    sendMails() {
      this.mailService.sendMails(this.isNew).subscribe({
        next: (response) => {
          console.log('Envio de correo:', response);
          this.textModal = 'Proceso Exitoso!'
          this.loader = false;
          this.cleanView();
        }, error: (err) => {
          this.textModal = 'Ocurrio un error en el envio del e-mail'
          this.loader = false;
          console.error('Error al enviar los datos:', err);
          this.authService.validarErrorApi(err);
        }
      });
    }
    
    validateServerDocs(arrayFiles: any[]) {
      const viabilidadMap = this.viabilidad.map(file => ({
        nombre: file.nombre,
        desc: file.desc,
        ready: arrayFiles.includes(file.nombre)
    }));
      this.viabilidad = viabilidadMap
  
      const archivosMap = this.currentFiles.map(file => ({
        nombre: file.nombre,
        desc: file.desc,
        ready: arrayFiles.includes(file.nombre)
    }));
      this.currentFiles = archivosMap
    }
   cleanView() {
    this.viabilidad = JSON.parse(JSON.stringify(this.viabilidadInit));
    this.currentFiles = JSON.parse(JSON.stringify(this.currentFilesInit));
    this.fileList = [];
    this.reset.emit();
   }
    validarFormulario(): boolean {
      const { tipo_persona, nombre, edad, monto, plazo, antiguedadEmpresa, ingresos, rfc } = this.request;
      return tipo_persona && nombre && edad && monto && plazo && antiguedadEmpresa && ingresos && rfc;
    }
    sendMessage(message: boolean) {
      this.messageEmitter.emit(message);
    }
    toggleDescription(v: any): void {
      v.showDesc = !v.showDesc;
    }
}