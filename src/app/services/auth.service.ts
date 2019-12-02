import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public get userData(): string {
    return localStorage.getItem('usuario');
  }
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
  logout() {
    console.log('you are logout');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('usuario');
  }
}
