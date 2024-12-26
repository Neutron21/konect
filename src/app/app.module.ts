import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeccionComponent } from './seccion/seccion.component';
import { PerfiladorComponent } from './perfilador/perfilador.component';
import { FinancierasComponent } from './financieras/financieras.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { HttpClientModule } from '@angular/common/http';
import { FormDocsComponent } from './form-docs/form-docs.component';
import { BackArrowComponent } from './back-arrow/back-arrow.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';  
import { VistaComponent } from './vista/vista.component';  
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SeccionComponent,
    PerfiladorComponent,
    FinancierasComponent,
    SeguimientoComponent,
    FormDocsComponent,
    BackArrowComponent,
    InstitucionesComponent,
    ModalComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxMaskModule.forRoot(), 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
