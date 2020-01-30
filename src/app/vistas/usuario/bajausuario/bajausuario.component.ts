import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-bajausuario',
  templateUrl: './bajausuario.component.html',
  styleUrls: ['./bajausuario.component.css']
})
export class BajausuarioComponent implements OnInit {
  usuario:Usuarios={username:'',password:'',tipousu:'',nombre:'',apellidos:'',telefono:''};
  constructor(private router:Router,private http:UsuarioService) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){
  }
/*
  Editar(){
  let id=localStorage.getItem("username");
  this.http.getUsuarioUnico(+username).subscribe(datos=>{this.usuario=datos;})
  }
*/
  bajaUsuario(usuario:Usuarios)
  {
    this.http.deleteUsuario(usuario).subscribe(datos=>{
      this.router.navigate(["listusuario"]);
    })
  }
}

