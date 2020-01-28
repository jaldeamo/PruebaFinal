import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { ValidausernameDirective } from './validador/validausername.directive';
import { ValidapasswordDirective } from './validador/validapassword.directive';
import { ValidadniDirective } from './validador/validadni.directive';
import { ValidaemailDirective } from './validador/validaemail.directive';
import { ValidatelefonoDirective } from './validador/validatelefono.directive';
import { ValidacompradorDirective } from './validador/validacomprador.directive';
import { UsuarioService } from './Servicios/usuario.service';
import { MascotaService } from './Servicios/mascota.service';
import { CompradorService } from './Servicios/comprador.service';
import { HistVentasService } from './Servicios/hist-ventas.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuadminComponent,
    AltausuarioComponent,
    BajausuarioComponent,
    ModifusuarioComponent,
    ListusuarioComponent,
    AltamascotaComponent,
    VentamascotaComponent,
    ModifmascotaComponent,
    ListmascotastipoComponent,
    ListmascotastodasComponent,
    ListmascotaunicaComponent,
    AltacompradorComponent,
    ListhventasComponent,
    ValidausernameDirective,
    ValidapasswordDirective,
    ValidadniDirective,
    ValidaemailDirective,
    ValidatelefonoDirective,
    ValidacompradorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService,MascotaService,CompradorService,HistVentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
