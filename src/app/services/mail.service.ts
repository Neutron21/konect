import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { financieras } from '../utils/financieras';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient,
    private authService: AuthService) {}

  sendMails(): Observable<any> {
    const headersJson = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': this.authService.getToken() + ""
    });

    const idFinanciera = Number(sessionStorage.getItem("financiera"));
    const producto = Number(sessionStorage.getItem("producto"));
    const institucion = financieras.find(el => el.id == idFinanciera);

    const payload = {
      emailUser: sessionStorage.getItem('user'),
      cliente: "",
      rfc: "",
      monto: "",
      producto: (institucion?.productos![producto] as { name: string }),
      broker: sessionStorage.getItem("broker") ,
      numCotizacion: sessionStorage.getItem("idCotizacion")
      // franquicia: "",
      // director:"",
      // region:"",
    };
    console.log(payload);
    
    return this.http.post(environment.api + environment.deleteToken, JSON.stringify(payload), { headers: headersJson });
  }
  
}