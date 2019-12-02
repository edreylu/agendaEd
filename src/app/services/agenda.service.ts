import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/Evento';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AgendaService {
API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getEventos() {
    return this.http.get(this.API_URI + '/evento');
  }
  getEvento(id: string) {
    return this.http.get(this.API_URI + '/evento/' + id);
  }
  deleteEvento(id: string) {
    return this.http.delete(this.API_URI + '/evento/' + id);
  }
  saveEvento(evento: Evento) {
    return this.http.post(this.API_URI + '/evento', evento);
  }
  updateEvento(id: string|number, updateEvento: Evento): Observable<Evento> {
    return this.http.put(this.API_URI + '/evento/' + id, updateEvento);
  }


  getUsuarios() {
    return this.http.get(this.API_URI + '/usuario');
  }
  getUsuario(id: string) {
    return this.http.get(this.API_URI + '/usuario/' + id);
  }
  deleteUsuario(id: string) {
    return this.http.delete(this.API_URI + '/usuario/' + id);
  }
  saveUsuario(usuario: Usuario) {
    return this.http.post(this.API_URI + '/usuario', usuario);
  }
  updateUsuario(id: string|number, updateUsuario: Usuario): Observable<Usuario> {
    return this.http.put(this.API_URI + '/usuario/' + id, updateUsuario);
  }

  login(usuario: string, password: string) {
   return this.http.post(this.API_URI + '/auth', {usuario , password});
    }
}