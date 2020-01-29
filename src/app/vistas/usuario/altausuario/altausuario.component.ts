import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {
  usuario:Usuarios={username:'',password:'',tipousu:'',nombre:'',apellidos:'',telefono:''};

  constructor(private router:Router, private http:UsuarioService) {
   }

  ngOnInit() {
  }
  Guardar(){
    this.http.createUsuario(this.usuario).subscribe(datos=>{
      this.router.navigate(["listusuario"]);
    })
  }

}
