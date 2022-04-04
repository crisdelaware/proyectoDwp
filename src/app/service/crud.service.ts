import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispositivo } from './Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = "http://localhost/dispositivos/";
  constructor(private http: HttpClient ) { }

  AgregarDispositivo(datosDispositivo:Dispositivo):Observable<any> {
    return this.http.post(this.API+"?insertar=1",datosDispositivo);
  }

  ListarDispositivo() {
    return this.http.get(this.API);
  }

  BorrarDispositivo(id:any):Observable<any> {
    return this.http.get(this.API+"?borrar="+id);
  }

  ObtenerDispositivo(id:any):Observable<any> {
    return this.http.get(this.API+"?consultar="+id);
  }

  EditarDispositivo(id:any, datosDispositivo:any):Observable<any> {
    return this.http.post(this.API+"?actualizar="+id,datosDispositivo);
  }
}
