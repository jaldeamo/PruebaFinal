import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listusuario',
  templateUrl: './listusuario.component.html',
  styleUrls: ['./listusuario.component.css']
})
export class ListusuarioComponent implements OnInit {
  usuario:Usuarios[];

  constructor(private http:UsuarioService,private router:Router) { }

  ngOnInit() {
    this.http.getUsuarios()
    .subscribe(datos=>{this.usuario=datos;
    })
  }
}

