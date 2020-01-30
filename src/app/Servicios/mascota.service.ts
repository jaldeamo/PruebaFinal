import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascotas } from '../interfaces/mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  path:string;

  constructor(private http:HttpClient) {
    this.path='http//localhost:8080/mascotas'
   }

   getMascotas()
   {
     return this.http.get<Mascotas[]>(this.path);
   }
   createMascotas(mascota:Mascotas)
   {
     return this.http.post<Mascotas>(this.path,mascota);
   }
   getMascotaUnica(idmascota:number)
   {
     return this.http.get<Mascotas>(this.path+"/"+idmascota);
   }
   updateMascota(mascota:Mascotas)
   {
     return this.http.put<Mascotas>(this.path+"/"+mascota.idmascota,mascota);
   }
   ventaMascota(mascota:Mascotas)
   {
     return this.http.put<Mascotas>(this.path+"/"+mascota.idmascota,mascota.estadomasc)
   }
}
