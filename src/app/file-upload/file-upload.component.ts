import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  fileName: string = '';
  fileColor: string = 'orange'; // Color inicial (naranja)

  // Método para manejar el cambio de archivo
  onFileChange(event: any): void {
    const file = event.target.files[0]; // Obtiene el primer archivo
    if (file) {
      this.fileName = file.name; // Actualiza el nombre del archivo
      this.fileColor = 'green'; // Cambia el color a verde
    }
  }

  // Método para abrir el explorador de archivos al hacer clic en el texto
  openFileDialog(inputFile: HTMLInputElement): void {
    inputFile.click(); // Simula el clic en el input de tipo file
  }

  // Método para restablecer el nombre, color del archivo y eliminar el archivo del input
  resetFile(inputFile: HTMLInputElement): void {
    this.fileName = ''; // Resetea el nombre del archivo
    this.fileColor = 'orange'; // Resetea el color a naranja
    inputFile.value = ''; // Elimina el archivo del input
  }
}
