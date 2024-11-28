import { Component, OnInit } from '@angular/core';
import { documentacion } from '../utils/documentos';

@Component({
  selector: 'app-form-docs',
  templateUrl: './form-docs.component.html',
  styleUrls: ['./form-docs.component.scss']
})
export class FormDocsComponent implements OnInit {

  fileUpload: any;
  currentFiles = documentacion.afirme.viabilidad;
  constructor() { }

  ngOnInit(): void {
  }
  onFileSelect(event: any) {
    const file = event.target.files[0];
    const allowedExtensions = ['pdf'];
  
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      console.log(file);
      
      if (allowedExtensions.includes(fileExtension)) { // Archivo permitido
        this.fileUpload = file;
        console.log('Archivo permitido:', file.name);
      } else { // Archivo no permitido
        console.error('Archivo no permitido. Extensión:', fileExtension);
        alert('Solo se permiten archivos de tipo PDF');
        this.fileUpload = null;
        event.target.value = '';
      }
    }
  }
}
