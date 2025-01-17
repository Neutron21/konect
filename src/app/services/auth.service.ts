import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { initializeApp } from 'firebase/app';
import { environment } from "src/environments/environment";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { Modal } from 'bootstrap';

@Injectable({
    providedIn:'root'
})

export class AuthService {
    
    constructor(
      private router: Router
    ) { }

    private app = initializeApp(environment.firebaseConfig);
    private auth = getAuth();
    private uid = '';
    private user = '';
    private token = '';
    private isLoggedIn = false;

    async singIn(email: string, password: string): Promise<any> {
      try {
          const credentials = await signInWithEmailAndPassword(this.auth, email, password);
          console.log(credentials);
          this.uid = credentials.user.uid;
          this.user = credentials.user.email || '';
          this.token = await credentials.user.getIdToken();
          this.setLogin();
          
          this.router.navigateByUrl('/registro');
          return credentials.user;
      } catch (error: any) {
          console.error('Error en inicio de sesión:', error);
  
          throw new Error(error.message || 'Credenciales incorrectas');
      }
  }
  
    setLogin() {
      sessionStorage.setItem('uid', this.uid);
      sessionStorage.setItem('user', this.user); 
      sessionStorage.setItem('token', this.token);
      this.isLoggedIn = true;
    }
    
    logOut() {
      signOut(this.auth)
        .then(() => {
          this.clearSessionData();
          this.router.navigateByUrl('/');
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
    
    private clearSessionData() {
      sessionStorage.clear(); 
      this.isLoggedIn = false;
    }
    validarErrorApi(error: any) {
      const modalElement = document.getElementById('sessionModal');
      if ((error.status == 401 || error.error.error.includes('Expired')) && modalElement ) {
          const modal = new Modal(modalElement);
          modal.show();
          console.log("Sesion expirada!");
          this.logOut()
          // setTimeout(() => modal.hide() , 2500)
          
      }
      
    }
    getIsLoged (){
      const sessionTrue = sessionStorage.getItem('uid');
      this.isLoggedIn = sessionTrue !== null ? true : false;
      return this.isLoggedIn;
    }
    getToken(): string | null {
      return sessionStorage.getItem('token'); // Devuelve el JWT
    }

    getUser(): string | null {
      return sessionStorage.getItem('user'); // Devuelve el correo del usuario logueado
    }
}

