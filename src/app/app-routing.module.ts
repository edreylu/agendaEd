import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { EventoListComponent } from './components/evento/evento-list/evento-list.component';
import { EventoFormComponent } from './components/evento/evento-form/evento-form.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateViaAuthGuardService } from './services/can-activate-via-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    component: UsuarioListComponent,
    canActivate: [CanActivateViaAuthGuardService]
  },
  {
    path: 'usuario/add',
    component: UsuarioFormComponent,
    canActivate: [CanActivateViaAuthGuardService]
  },
  {
    path: 'usuario/edit/:id',
    component: UsuarioFormComponent,
    canActivate: [CanActivateViaAuthGuardService]
  },
  {
    path: 'evento',
    component: EventoListComponent,
    canActivate: [CanActivateViaAuthGuardService]
  },
  {
    path: 'evento/add',
    component: EventoFormComponent,
    canActivate: [CanActivateViaAuthGuardService]
  },
  {
    path: 'evento/edit/:id',
    component: EventoFormComponent,
    canActivate: [CanActivateViaAuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
