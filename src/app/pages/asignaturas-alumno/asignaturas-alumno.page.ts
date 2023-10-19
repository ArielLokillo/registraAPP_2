import { Component, OnInit } from '@angular/core';
import { AsignaturasAlumno } from './asignaturas-alumno.models';
import { Router } from '@angular/router';
import { AsignaturasAlumnoService } from 'src/app/services/asignaturas-alumno.service';

@Component({
  selector: 'app-asignaturas-alumno',
  templateUrl: './asignaturas-alumno.page.html',
  styleUrls: ['./asignaturas-alumno.page.scss'],
})
export class AsignaturasAlumnoPage implements OnInit {
  
  listaAsignaturasAlumno: AsignaturasAlumno[] = [];
  buscador: AsignaturasAlumno[] = [];

  constructor(private router: Router,
              private asignaturasAlumnoService: AsignaturasAlumnoService) { }

  //METODO QUE SE EJECUTA CUANDO SE CREA LA PAGINA
  ngOnInit() {
    this.listaAsignaturasAlumno = this.asignaturasAlumnoService.getAll()
  }

  //METODO QUE SE EJECUTA CUANDO UNO VUELVE A LA PAGINA
  ionViewWillEnter() {
    //this.listaAsignaturas = this.asignaturasService.getAll()
  }

  listarAlumno() {
    this.listaAsignaturasAlumno = this.asignaturasAlumnoService.getAll()
  }

  //addAsignatura() {
    //this.router.navigate(['/agregar']);
  //}

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listarAlumno();
      event.target.complete();
    }, 2000);
  }

  handleReorder(ev: CustomEvent<any>) {

    ev.detail.complete();
  }

  buscarAsignatura(event: any){
    const texto = event.target.value;
    if( texto && texto.trim() != '' ){
      this.listaAsignaturasAlumno = this.listaAsignaturasAlumno.filter((aux: any) => {
        //BUSQUE TODOS LOS POSIBLES RESULTADOSEN MANUS Y EN MINUS
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
      })
    }
  }

}
