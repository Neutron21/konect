import { Component, OnInit } from '@angular/core';
import { documentacion } from '../utils/documentos';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form-docs',
  templateUrl: './form-docs.component.html',
  styleUrls: ['./form-docs.component.scss']
})
export class FormDocsComponent implements OnInit {

  fileUpload: any;
  currentFiles = documentacion.afirme.viabilidad;
  fileList: any[] = [];

  constructor(
    private apiServices: ApiService,
  ) { }

  ngOnInit(): void {
  }
  onFileSelect(event: any, nameFile: string) {
    const file = event.target.files[0];
    const allowedExtensions = ['pdf'];
  
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      console.log(file);
      
      if (allowedExtensions.includes(fileExtension)) { // Archivo permitido
        this.fileUpload = file;
        console.log('Archivo permitido:', file.name);
        const customFileName = `${nameFile}.${fileExtension}`; // Nuevo nombre
        this.fileUpload = { file, customName: customFileName };
        console.log(this.fileUpload);
        
        this.validarExistencias(nameFile);
      } else { // Archivo no permitido
        console.error('Archivo no permitido. Extensión:', fileExtension);
        alert('Solo se permiten archivos de tipo PDF');
        this.fileUpload = null;
        event.target.value = '';
      }
    }
  }
  validarExistencias(name: string) { 
      const indice = this.fileList.findIndex(el => el.customName.includes(name));
      console.log(indice);
      if (indice >= 0) {
        this.fileList[indice] = this.fileUpload;
      } else {
        this.fileList.push({...this.fileUpload});
      }
      console.log(this.fileList);
  }
  sendDocs() {
    const cotizacion = "4";
    console.log(this.fileList);
    const formData = new FormData();
    const user = sessionStorage.getItem('user')+"";
    formData.append('user', user);
    formData.append('idCotizacion', cotizacion);
    this.fileList.forEach((document, index) => {
      formData.append(`file${index}`, document.file, document.customName);
    });
    console.log('Contenido de FormData:');
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
  
    this.apiServices.upLoadFiles(formData);
  }
  uploadFiles(data: FormData) {

  }
}
