import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfiladorComponent } from './perfilador/perfilador.component';
import { FinancierasComponent } from './financieras/financieras.component';
import { SeccionComponent } from './seccion/seccion.component';
import { AuthGuard } from './services/guard.service';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfilador', component: PerfiladorComponent, canActivate: [AuthGuard] },
  { path: 'financieras', component: FinancierasComponent, canActivate: [AuthGuard] },
  { path: 'seguimiento', component: SeguimientoComponent, canActivate: [AuthGuard] },
  { path: 'seccion', component: SeccionComponent, canActivate: [AuthGuard] }, // Asegúrate que esté incluida
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
