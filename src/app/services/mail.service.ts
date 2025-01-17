import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  sendMails(isNew: boolean): Observable<any> {
    const headersJson = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': this.authService.getToken() + ""
    });
    const cotizacion = JSON.parse(sessionStorage.getItem("cotizacion")+"");
    const idFinanciera = Number(sessionStorage.getItem("financiera"));
    const producto = Number(sessionStorage.getItem("producto"));
    const institucion = financieras.find(el => el.id == idFinanciera);

    const payload = {
      isNew: isNew,
      emailUser: this.authService.getUser(),
      cliente: cotizacion.nombre,
      financiera: sessionStorage.getItem('financiera'),
      rfc: cotizacion.rfc,
      monto: cotizacion.monto,
      producto: (institucion?.productos![producto] as { name: string }).name,
      broker: sessionStorage.getItem("broker") ,
      numCotizacion: sessionStorage.getItem("idCotizacion"),
      institucion: institucion?.nombre
      // franquicia: "",
      // director:"",
      // region:"",
    };
    console.log(payload);
    
    return this.http.post(environment.api + environment.sendMail, JSON.stringify(payload), { headers: headersJson });
  }
  
}