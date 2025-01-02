import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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

  queryCustom(tabla: string, campo: string, valor: string): Observable<any[]> {
    const headersJson = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': this.authService.getToken() + ""
    });

    // Crear los parámetros de la solicitud
    let params = new HttpParams()
      .set('tabla', tabla)
      .set('campo', campo)
      .set('valor', valor);

    return this.http.get<any[]>(environment.api + environment.queryCustom, { headers: headersJson, params });
  }  
  upLoadFiles(request : FormData): Observable<any> {
    const headersJson = new HttpHeaders({
      // Cuando es formData multipart, no se manda esta cabecera 'Content-Type': 'application/json',
      'X-Auth-Token': this.authService.getToken() + ""
    });
  return this.http.post(environment.api + environment.sendFiles, request, { headers: headersJson })
  }
  checkSessionExpired(request:any): Observable<any> {
  const headersJson = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Auth-Token': this.authService.getToken() + ""
  });

  return this.http.post(environment.api + environment.sessionExpired,  JSON.stringify(request), { headers: headersJson });
}
updateEstatus(request: any): Observable<any> {
  const headersJson = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Auth-Token': this.authService.getToken() + ""
  });

  return this.http.post( environment.api + environment.estatus, JSON.stringify(request), { headers: headersJson });
}

sendComentarios(request: any): Observable<any> {
  const headersJson = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Auth-Token': this.authService.getToken() + ""
  });
 
  return this.http.post(environment.api + environment.comentarios, JSON.stringify(request), { headers: headersJson });
}

}
