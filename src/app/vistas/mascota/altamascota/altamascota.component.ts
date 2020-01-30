import { Component, OnInit } from '@angular/core';
import { Mascotas } from 'src/app/interfaces/mascotas';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altamascota',
  templateUrl: './altamascota.component.html',
  styleUrls: ['./altamascota.component.css']
})
export class AltamascotaComponent implements OnInit {
  //mascota:Mascotas={nombre:'',tipo:'',precio:,estadomasc:''};
  mascota:Mascotas

  constructor(private router:Router, private http:MascotaService) {
   }

  ngOnInit() {
  }
  Guardar(){
    this.http.createMascotas(this.mascota).subscribe(datos=>{
      this.router.navigate(["listmascotastodas"]);
    })
  }

}
