import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router'; // Importar el router
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  analytics: any;
  mostrarPassword: boolean = false;
  badCredentials: boolean = false;
  showSpinner: boolean = false;
  campoVacio: boolean = false;

  constructor(
    private authservices: AuthService,
    private router: Router ,
    private apiservice: ApiService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    const app = initializeApp(environment.firebaseConfig);
    this.analytics = getAnalytics(app);
  }

  showPass() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  async sendCredentials() {
    const { email, password } = this.loginForm.value;

    if (!!email && !!password) {
      this.showSpinner = true;
      try {
        const user = await this.authservices.singIn(email, password);
        console.log(user);

        this.apiservice.saveTokenAndEmail().subscribe({
          next: (response) => {
            console.log('Guardado con éxito:', response);
          },
          error: (err) => {
            console.error('Error al guardar token y email:', err);
          }
        });

        this.router.navigate(['/seccion']);
      } catch (error) {
        console.error(error);

        this.badCredentials = true;
      } finally {
        this.showSpinner = false;
      }
    } else {
      this.campoVacio = true; 
    }
  }
  
}
