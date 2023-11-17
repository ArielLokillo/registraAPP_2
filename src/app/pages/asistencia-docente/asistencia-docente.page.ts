import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-asistencia-docente',
  templateUrl: './asistencia-docente.page.html',
  styleUrls: ['./asistencia-docente.page.scss'],
})


export class AsistenciaDocentePage implements OnInit {

  usuarios: any[] = [];
  apiURL = "https://jsonserver-4ld4.onrender.com"

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>("https://jsonserver-4ld4.onrender.com").subscribe(resultado => {
      this.usuarios = resultado.usuarios;
      console.log(this.usuarios)
    });
  }

  getUser(): Observable<any> {
    return this.httpClient.get("https://jsonserver-4ld4.onrender.com")
  }

  //this.httpClient.get<any>("https://jsonserver-4ld4.onrender.com").subscribe(resultado => {
  //  this.usuarios = resultado.usuarios;
  //  console.log(this.usuarios)
  //});

}
