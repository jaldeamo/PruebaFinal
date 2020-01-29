import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from './interfaces/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaFinal';
  usuario:Usuarios={username:'',password:'',tipousu:'',nombre:'',apellidos:'',telefono:''};
    
  constructor(private router:Router){}

  menuAdministrador()
  {
    this.router.navigate(['menuadmin']);
  }
}
