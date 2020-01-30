import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  path:string;
 
  constructor(private http:HttpClient) {
    this.path='http://localhost:8080/usuarios'
   }
  
   getUsuarios()
   {
     return this.http.get<Usuarios[]>(this.path);
   }
   createUsuario(usuario:Usuarios)
   {
     return this.http.post<Usuarios>(this.path,usuario);
   }
   getUsuarioUnico(username:string)
   {
     return this.http.get<Usuarios>(this.path+"/"+username);
   }
   updateUsuario(usuario:Usuarios)
   {
     return this.http.put<Usuarios>(this.path+"/"+usuario.username,usuario);
   }
   deleteUsuario(usuario:Usuarios)
   {
   return this.http.delete<Usuarios>(this.path+"/"+usuario.username);
   }
}

