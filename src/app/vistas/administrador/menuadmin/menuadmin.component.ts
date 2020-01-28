import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent implements OnInit {

  constructor(private router:Router) { }

altaUsuario()
{
  this.router.navigate(['altausuario']);
}
bajaUsuario()
{
  this.router.navigate(['bajausuario']);
}
modifUsuario()
{
  this.router.navigate(['modifusuario']);
}
listUsuario()
{
  this.router.navigate(['listusuario']);
}
altaMascota()
{
  this.router.navigate(['altamascota']);
}
modifMascota()
{
  this.router.navigate(['modifmascota']);
}

  ngOnInit() {
  }

}
