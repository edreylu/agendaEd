import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { AgendaService } from '../../../services/agenda.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  edit = false;
  usuario: Usuario = {
  id: 0,
  usuario: '',
  password: '',
  nombre: '',
  fecha_registro: new Date()
  }
  constructor(private agendaService: AgendaService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    if (params.id) {
     this.agendaService.getUsuario(params.id).
     subscribe(
       res => {
        console.log(res);
        this.usuario = res;
        this.edit = true;
       },
       err => console.error(err)
     );
    }
  }

  guardaNuevoUsuario() {
    delete this.usuario.id;
    delete this.usuario.fecha_registro;
    this.agendaService.saveUsuario(this.usuario).
    subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/usuario']);
      },
      err => console.error(err)
    );
  }
  actualizaUsuario() {
   delete this.usuario.fecha_registro;
   this.agendaService.updateUsuario(this.usuario.id, this.usuario).
   subscribe(
     res => {
       console.log(res);
       this.router.navigate(['/usuario']);
     },
     err => console.error(err)
   );
 }

}