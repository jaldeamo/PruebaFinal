import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { MenuadminComponent } from './vistas/administrador/menuadmin/menuadmin.component';
import { AltausuarioComponent } from './vistas/usuario/altausuario/altausuario.component';
import { BajausuarioComponent } from './vistas/usuario/bajausuario/bajausuario.component';
import { ModifusuarioComponent } from './vistas/usuario/modifusuario/modifusuario.component';
import { ListusuarioComponent } from './vistas/usuario/listusuario/listusuario.component';
import { AltamascotaComponent } from './vistas/mascota/altamascota/altamascota.component';
import { VentamascotaComponent } from './vistas/mascota/ventamascota/ventamascota.component';
import { ModifmascotaComponent } from './vistas/mascota/modifmascota/modifmascota.component';
import { ListmascotastipoComponent } from './vistas/mascota/listmascotastipo/listmascotastipo.component';
import { ListmascotastodasComponent } from './vistas/mascota/listmascotastodas/listmascotastodas.component';
import { ListmascotaunicaComponent } from './vistas/mascota/listmascotaunica/listmascotaunica.component';
import { AltacompradorComponent } from './vistas/comprador/altacomprador/altacomprador.component';
import { ListhventasComponent } from './vistas/hist_ventas/listhventas/listhventas.component';

const routes: Routes = [
  {path:'menuadmin',component:MenuadminComponent},
  {path:'altausuario',component:AltausuarioComponent},
  {path:'bajausuario',component:BajausuarioComponent},
  {path:'modifusuario',component:ModifusuarioComponent},
  {path:'listusuario',component:ListusuarioComponent},
  {path:'altamascota',component:AltamascotaComponent},
  {path:'ventamascota',component:VentamascotaComponent},
  {path:'modifmascota',component:ModifmascotaComponent},
  {path:'listmascotastipo',component:ListmascotastipoComponent},
  {path:'listmascotastodas',component:ListmascotastodasComponent},
  {path:'listmascotaunica',component:ListmascotaunicaComponent},
  {path:'altacomprador',component:AltacompradorComponent},
  {path:'listhventas',component:ListhventasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
