import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
})
export class AsistenciaAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}

// import { Component, OnInit } from '@angular/core';
// import { AsistenciasAlumno } from './asistencia-alumno.models';
// import { Router } from '@angular/router';
// import { AsistenciasAlumnoService } from 'src/app/services/asistencia-alumno.service';

// @Component({
//   selector: 'app-asistencia-alumno',
//   templateUrl: './asistencia-alumno.page.html',
//   styleUrls: ['./asistencia-alumno.page.scss'],
// })

// export class AsistenciasAlumnoPage implements OnInit {
  
//   listaAsistenciaAlumno: AsistenciasAlumno[] = [];
//   buscador: AsistenciasAlumno[] = [];

//   constructor(private router: Router,
//               private asistenciasAlumnoService: AsistenciasAlumnoService) { }

//   //METODO QUE SE EJECUTA CUANDO SE CREA LA PAGINA
//   ngOnInit() {
//     this.listaAsistenciaAlumno = this.asistenciasAlumnoService.getAll()
//   }

//   //METODO QUE SE EJECUTA CUANDO UNO VUELVE A LA PAGINA
//   ionViewWillEnter() {
//     //this.listaAsignaturas = this.asignaturasService.getAll()
//   }

//   listarAlumno() {
//     this.listaAsistenciaAlumno = this.asistenciasAlumnoService.getAll()
//   }

//   //addAsignatura() {
//     //this.router.navigate(['/agregar']);
//   //}

//   handleRefresh(event: any) {
//     setTimeout(() => {
//       this.listarAlumno();
//       event.target.complete();
//     }, 2000);
//   }

//   handleReorder(ev: CustomEvent<any>) {

//     ev.detail.complete();
//   }

//   buscarAsignatura(event: any){
//     const texto = event.target.value;
//     if( texto && texto.trim() != '' ){
//       this.listaAsistenciaAlumno = this.listaAsistenciaAlumno.filter((aux: any) => {
//         //BUSQUE TODOS LOS POSIBLES RESULTADOSEN MANUS Y EN MINUS
//         return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
//       })
//     }
//   }

// }
