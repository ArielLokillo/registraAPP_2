import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {

  usuarios: any[] = [];
  avatares: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>("https://randomuser.me/api/?results=20").subscribe(resultado => {
      this.usuarios = resultado.results;
      console.log(this.usuarios)
    });

  }

  //https://rickandmortyapi.com/api/character

}
