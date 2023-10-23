import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-asistencia-docente',
  templateUrl: './asistencia-docente.page.html',
  styleUrls: ['./asistencia-docente.page.scss'],
})


export class AsistenciaDocentePage implements OnInit {

  usuarios: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>("http://localhost:3000").subscribe(resultado => {
      this.usuarios = resultado.usuarios;
      console.log(this.usuarios)
    });
  }

}
