import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosrandomService {

  constructor(private httpClient: HttpClient) { }

  //Metodo para obtener un usuario aleatorio de la API
  getRandomUser(): Observable<any> {
    return this.httpClient.get("https://randomuser.me/api")
  }
}
