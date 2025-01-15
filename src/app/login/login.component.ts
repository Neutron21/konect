import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  analytics: any;
  mostrarPassword = false;
  badCredentials = false;
  showSpinner = false;
  campoVacio = false;

  constructor(private authService: AuthService, private router: Router, private apiservice: ApiService) {
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

  resetMessages() {
    this.badCredentials = false;
    this.campoVacio = false;
  }

  async sendCredentials() {
    const { email, password } = this.loginForm.value;

    if (email && password) {
      this.showSpinner = true;
      try {
        const user = await this.authService.singIn(email, password);
        sessionStorage.setItem('userEmail', email);
        this.getUserInfo(email);
        this.router.navigate(['/seccion']);
      } catch {
        this.badCredentials = true;
      } finally {
        this.showSpinner = false;
      }
    } else {
      this.campoVacio = true;
    }
  }
  getUserInfo(email: string) {
    this.apiservice.queryCustom('usuarios', 'email', email).subscribe(
      (data: any[]) => {
       console.log(data);
       sessionStorage.setItem('rol', data[0].rol);
       sessionStorage.setItem('broker', data[0].broker);
      },
      (error: any) => {
        console.error('Error al consultar usuario:', error);
        console.log(error);
        this.authService.validarErrorApi(error);
      }
    );
  }
}
