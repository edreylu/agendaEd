import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  usuario = JSON.parse(this.authService.userData);
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }

  public get session(): boolean {
    return this.authService.logIn;
    }

    logout() {
    swal.fire({
      title: 'Estas seguro de cerrar sesion?',
      text: 'Estas intentando cerrar sesion',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, cerrar sesion',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Saliendo',
          'Se esta cerrando tu sesion.',
          'success'
        );
        this.authService.logout();
        this.router.navigate(['/']);
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelado',
          'Continua tu sesion',
          'error'
        ); }});
    }
}
