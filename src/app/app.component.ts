import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { SocketIOAdapter } from './socketio-adapter';
import { Socket } from 'ng-socket-io';
import { Http } from '@angular/http';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuario: any;
  title: string;
  userId: string;
  buscar: string;
  public adapter: ChatAdapter;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.title = 'agendaed';
    if (this.session) {
  this.datos();
  this.adapter = new DemoAdapter();
    }
  }
    public datos() {
      this.usuario = JSON.parse(this.authService.userData);
      this.userId = this.usuario[0].id;
      console.log(this.userId);
    }
    public get session(): boolean {
      return this.authService.userData !== null;
      }
}
