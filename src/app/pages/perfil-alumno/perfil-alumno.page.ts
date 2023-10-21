import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {

  usuarios: any[] = [];
  avatares: any[] = [];
  digimones: any[] = [];

  paginaActual = 0;


  constructor(
    private httpClient: HttpClient,
    private loadingController: LoadingController) { }

  ngOnInit() {
    //this.httpClient.get<any>("https://randomuser.me/api/?results=20").subscribe(resultado => {
    //  this.usuarios = resultado.results;
    //  console.log(this.usuarios)
    //});
    
  }

  cargarData() {
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`    
    this.httpClient.get<any>(url).subscribe(resultado => {
      this.digimones = resultado.content;
    });

    
    //this.mensaje();
  }
  
  cargarMasData() {
    this.paginaActual++;
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`    
    this.httpClient.get<any>(url).subscribe(resultado => {
      this.digimones = this.digimones.concat(resultado.content);
    });
    //this.mensajeToast('Carga exitosa!');
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarData();
  }

  cargarAnteriorPagina() {
    this.paginaActual--;
    this.cargarData();
  }

  
  //https://rickandmortyapi.com/api/character

}
