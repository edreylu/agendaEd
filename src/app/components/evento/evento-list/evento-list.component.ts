import { Component, OnInit, HostBinding } from '@angular/core';
import { Evento } from 'src/app/models/Evento';
import { AgendaService } from '../../../services/agenda.service';
@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  eventos: any = [];
  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.getEventos();
  }
  getEventos() {
    this.agendaService.getEventos().subscribe(
      res => {
        this.eventos = res;
      },
      err => console.log(err)
    );

  }
  eliminaEvento(id: string) {
  this.agendaService.deleteEvento(id).
  subscribe(
    res => {
    console.log(res);
    this.getEventos();
    },
    err => console.error(err)
  );
  }
}
