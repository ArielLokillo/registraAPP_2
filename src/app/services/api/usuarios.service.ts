import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { IUsuarios } from 'src/app/interfaces/iusuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  listUsuarios(): Observable<IUsuarios> {
    return this.httpClient.get<IUsuarios>(`${environment.apiURL}/usuarios`);
  }

  addUsuario(usuario: IUsuario): Observable<IUsuario> {
    return this.httpClient.post<IUsuario>(`${environment.apiURL}/usuarios`,usuario);
  }

  getUsuario(id: Number): Observable<IUsuarios> {
    return this.httpClient.get<IUsuarios>(`${environment.apiURL}/usuarios/?id=${id}`);
  }

  updateUsuario(usuario: any): Observable<IUsuarios> {
    return this.httpClient.put<IUsuarios>(`${environment.apiURL}/usuarios/${usuario.id}`,usuario);
  }

  deleteUsuario(usuario: any): Observable<IUsuarios> {
    return this.httpClient.delete<IUsuarios>(`${environment.apiURL}/usuarios/${usuario.id}`);
  }
}
