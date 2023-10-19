import { Injectable } from '@angular/core';
import { AsignaturasAlumno } from '../pages/asignaturas-alumno/asignaturas-alumno.models';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasAlumnoService {



    asignaturasAlumno: AsignaturasAlumno[] = [
      {
        id: '1',
        nombre: 'Programacion aplicaciones moviles',
        siglas: 'PGY41211',
        seccion: '007D',
        docente: 'Francisco Juilliet',
        horarioAlumno: 'miercoles - 11:20 a 13:01 viernes - 10:01 a 11:20',
      },
      {
        id: '2',
        nombre: 'Ingles Intermedio',
        siglas: 'INI5111',
        seccion: '015D',
        docente: 'Patrizzia Rippetti',
        horarioAlumno: 'martes - 8:31 a 10:41 jueves - 8:31 a 10:41 viernes - 8:31 a 9:50',
      },
      {
        id: '3',
        nombre: 'Proceso de portafolio',
        siglas: 'APY4461',
        seccion: '015D',
        docente: 'Cristian Martinez',
        horarioAlumno: 'miercoles 13:41 a 15:10',
  
      },
      {
        id: '4',
        nombre: 'Arquitectura',
        siglas: 'ASY4131',
        seccion: '009D',
        docente: 'Jeanette Leonelli',
        horarioAlumno: 'lunes 10:41 a 12:10 - miercoles 10:01 a 11:20',
      },
      {
        id: '5',
        nombre: 'Calidad de software',
        siglas: 'CSY4111',
        seccion: '008D',
        docente: 'Julio Tapia',
        horarioAlumno: 'martes 12:11 a 13:40 - jueves 11:31 a 12:50',
      },
      {
        id: '6',
        nombre: 'Estadística descriptiva',
        siglas: 'MAT4140',
        seccion: '008D',
        docente: 'Patricio García',
        horarioAlumno: 'lunes 13:01 a 14:20 jueves 13:01 a 14:20',
      },
      {
        id: '7',
        nombre: 'Principios-fe cristiana',
        siglas: 'PFC010',
        seccion: '019D',
        docente: 'Eugenio paredes',
        horarioAlumno: 'lunes 8:31 a 9:50',
      },
      {
        id: '8',
        nombre: 'Ética para el trabajo',
        siglas: 'EAY4450',
        seccion: '006D',
        docente: 'Paula Vera',
        horarioAlumno: 'martes 14:31 a 15:50',
      },
    ]
  
    constructor() { }
  
    //METODOS CUSTOM
  
    //METODO QUE DEVUELVE EL OBJETO COMPLETO
    getAll() {
      return [...this.asignaturasAlumno]
    }
  
    //METODO QUE DEVUELVE LA ASIGNATURA POR EL ID BUSCADO
    getAsignaturaAlumno(id: string) {
      return {
        ...this.asignaturasAlumno.find(aux => {
          return aux.id === id
        })
      }
    }
  
    //METODO QUE AGREGA UNA ASIGNATURA
    addAsignaturaAlumno(nombre: string, siglas: string, seccion: string) {
      this.asignaturasAlumno.push({
        nombre, siglas, seccion, id: this.asignaturasAlumno.length + 1 + ""
      })    
    }
  
    //METODO QUE ELIMINA UNA ASIGNATURA POR EL ID
    deleteAsignaturaAlumno(id: string) {
      this.asignaturasAlumno = this.asignaturasAlumno.filter(aux => {
        return aux.id !== id
      })
    }
  }

