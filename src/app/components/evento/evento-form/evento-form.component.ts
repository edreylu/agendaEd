import { Component, OnInit, HostBinding } from '@angular/core';
import { Evento } from 'src/app/models/Evento';
import { AgendaService } from '../../../services/agenda.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  edit = false;
  evento: Evento = {
  id: 0,
  nom_evento: '',
  descripcion: '',
  foto: '',
  fecha_registro: new Date()
  }
  constructor(private agendaService: AgendaService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    if (params.id) {
     this.agendaService.getEvento(params.id).
     subscribe(
       res => {
        console.log(res);
        this.evento = res;
        this.edit = true;
       },
       err => console.error(err)
     );
    }
  }

  guardaNuevoEvento() {
    delete this.evento.id;
    delete this.evento.fecha_registro;
    this.agendaService.saveEvento(this.evento).
    subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/evento']);
      },
      err => console.error(err)
    );
  }
  actualizaEvento() {
   delete this.evento.fecha_registro;
   this.agendaService.updateEvento(this.evento.id, this.evento).
   subscribe(
     res => {
       console.log(res);
       this.router.navigate(['/evento']);
     },
     err => console.error(err)
   );
 }

}
