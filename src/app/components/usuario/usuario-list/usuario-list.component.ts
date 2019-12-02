import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { AgendaService } from '../../../services/agenda.service';
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  usuarios: any = [];
  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.getUsuarios();
  }
  getUsuarios() {
    this.agendaService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.log(err)
    );

  }
  eliminaUsuario(id: string) {
  this.agendaService.deleteUsuario(id).
  subscribe(
    res => {
    console.log(res);
    this.getUsuarios();
    },
    err => console.error(err)
  );
  }
}