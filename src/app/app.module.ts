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
<<<<<<< HEAD
import { VistaComponent } from './vista/vista.component';
=======
import { BackArrowComponent } from './back-arrow/back-arrow.component';
>>>>>>> 0025844ef0b24b154e0488db14c137d67b608701

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
<<<<<<< HEAD
    VistaComponent,
=======
    BackArrowComponent,
>>>>>>> 0025844ef0b24b154e0488db14c137d67b608701
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
