import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import {FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private agendaService: AgendaService,
              private router: Router, private toastr: ToastrService,
              private formBuilder: FormBuilder) {
               }

  ngOnInit() {
    this.form = this.formBuilder.group({
      usuario: new FormControl('', [
        // validaciones síncronas
        Validators.required
      ], [
        // validaciones asíncronas
      ]),
      password: new FormControl('', [
        // validaciones síncronas
        Validators.required
      ], [
        // validaciones asíncronas
      ])
    });
  }

  login() {
  const usuario = this.form.get('usuario').value;
  const password = this.form.get('password').value;
  this.agendaService.login(usuario, password)
  .subscribe((res: any) => {
      console.log(res.token);
      this.router.navigate(['evento']);
      localStorage.setItem('auth_token', res.token);
      this.toastr.success('Bienvenido!', 'Acceso correcto!');
      },
      err => { console.error(err),
      this.toastr.error('Error al iniciar sesion', err.errorMessage );
      });
  }
  /*
  login() {
    const usuario = this.form.get('usuario').value;
    const password = this.form.get('password').value;
    this.agendaService.login(usuario, password)
    .subscribe((res: any) => {
        console.log(res.token);
        console.log(res.user);
        this.router.navigate(['evento']);
        localStorage.setItem('auth_token', res.token);
        localStorage.setItem('usuario', res.user);
        this.toastr.success('Bienvenido!', 'Acceso correcto!');
        },
        err => {this.toastr.error('Error al iniciar sesion', 'Usuario o password incorrecto!' );
        });
    }
    */
}

