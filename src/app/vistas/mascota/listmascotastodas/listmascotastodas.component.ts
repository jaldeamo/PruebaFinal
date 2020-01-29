import { Component, OnInit } from '@angular/core';
import { Mascotas } from 'src/app/interfaces/mascotas';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmascotastodas',
  templateUrl: './listmascotastodas.component.html',
  styleUrls: ['./listmascotastodas.component.css']
})
export class ListmascotastodasComponent implements OnInit {
  mascota:Mascotas[];

  constructor(private http:MascotaService,private router:Router) { }

  ngOnInit() {
    this.http.getMascotas()
    .subscribe(datos=>{this.mascota=datos;
    })
  }
}
