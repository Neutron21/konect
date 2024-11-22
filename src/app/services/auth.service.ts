import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { initializeApp } from 'firebase/app';
import { environment } from "src/environments/environment";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { ApiService } from "./api.service";

@Injectable({
    providedIn:'root'
})

export class AuthService {
    
    constructor(
      private router: Router
    ){}

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
          this.user = credentials.user.email + '';
          this.token = await credentials.user.getIdToken();
          this.setLogin();
          
          
          this.router.navigateByUrl('/registro');
          return credentials.user;
        } catch (error: any) {
          console.log(error);
        }
      }
      setLogin() {
        sessionStorage.setItem('uid', this.uid);
        sessionStorage.setItem('user', this.user);
        sessionStorage.setItem('token', this.token);

        this.isLoggedIn = true;
      }
      logOut() {
        signOut(this.auth).then(() => {
        this.setLogOut();
        this.router.navigateByUrl('/');
          }).catch((error) => {
            console.log('Error de Logout', error);
          });
        }
      setLogOut(){
        sessionStorage.removeItem('uid');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');

        this.isLoggedIn = false;
      }
      getIsLoged (){
        const sessionTrue = sessionStorage.getItem('uid');
        this.isLoggedIn = sessionTrue !== null ? true : false;
        return this.isLoggedIn;
      }
      getToken(): string | null {
        return sessionStorage.getItem('token'); // Devuelve el JWT (ID Token) almacenado
      }

      getUser(): string | null {
        return sessionStorage.getItem('user'); // Devuelve el correo del usuario logueado
      }
}

