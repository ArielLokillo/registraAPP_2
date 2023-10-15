import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia-docente',
  templateUrl: './asistencia-docente.page.html',
  styleUrls: ['./asistencia-docente.page.scss'],
})
export class AsistenciaDocentePage implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
