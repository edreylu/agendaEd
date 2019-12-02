import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { EventoListComponent } from './components/evento/evento-list/evento-list.component';
import { EventoFormComponent } from './components/evento/evento-form/evento-form.component';
import { AgendaService } from './services/agenda.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgChatModule } from 'ng-chat';
import { AuthService } from './services/auth.service';
import { CanActivateViaAuthGuardService } from './services/can-activate-via-auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    EventoListComponent,
    EventoFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule
    NgChatModule
  ],
  providers: [AgendaService, AuthService, CanActivateViaAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
