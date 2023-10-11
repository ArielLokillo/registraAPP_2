import { Component, OnInit } from '@angular/core';
import { Asignatura } from './asignaturas.models';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  listaAsignaturas: Asignatura[] = [];
  buscador: Asignatura[] = [];

  constructor(private router: Router,private asignaturasService: AsignaturasService) { }

  //METODO QUE SE EJECUTA CUANDO SE CREA LA PAGINA
  ngOnInit() {
    this.listaAsignaturas = this.asignaturasService.getAll()
  }

  //METODO QUE SE EJECUTA CUANDO UNO VUELVE A LA PAGINA
  ionViewWillEnter() {
    //this.listaAsignaturas = this.asignaturasService.getAll()
  }

  listar() {
    this.listaAsignaturas = this.asignaturasService.getAll()
  }

  addAsignatura() {
    this.router.navigate(['/agregar']);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  handleReorder(ev: CustomEvent<any>) {

    ev.detail.complete();
  }

  buscarAsignatura(event: any){
    const texto = event.target.value;
    if( texto && texto.trim() != '' ){
      this.listaAsignaturas = this.listaAsignaturas.filter((aux: any) => {
        //BUSQUE TODOS LOS POSIBLES RESULTADOSEN MANUS Y EN MINUS
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
      })
    }
  }
}
