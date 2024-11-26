import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private headersJson = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'X-Auth-Token': this.authService.getToken() + ""
  // });

  constructor(
    private http: HttpClient,
    private authService: AuthService) {}

  saveTokenAndEmail(): Observable<any> {
    const headersJson = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': this.authService.getToken() + ""
    });
    const payload = {
      email: this.authService.getUser(),
      token: this.authService.getToken()
    };
    console.log('saveTokenAndEmail', payload);
 
    return this.http.post(environment.api + environment.updateToken, JSON.stringify(payload), {headers: headersJson});
        
  }
  deleteToken(): Observable<any> {
    const headersJson = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': this.authService.getToken() + ""
    });
    const payload = {
      email: this.authService.getUser(),
    };
    console.log('deleteToken payload:', payload);
  
    return this.http.post(environment.api + environment.deleteToken, JSON.stringify(payload), { headers: headersJson });
  }
  sendCotizacion(request: any): Observable<any> {
    const headersJson = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': this.authService.getToken() + ""
    });
   
    console.log('Cotizacion enviada:', request);
  
    return this.http.post(environment.api + environment.cotizacion, JSON.stringify(request), { headers: headersJson });
  }
  
}
