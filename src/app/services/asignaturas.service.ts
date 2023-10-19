import { Injectable } from '@angular/core';
import { Asignatura } from '../pages/asignaturas/asignaturas.models';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  asignaturas: Asignatura[] = [
    {
      id: '1',
      nombre: 'Programacion aplicaciones moviles',
      siglas: 'PGY41211',
      seccion: '007D',
      docente: 'Francisco Juilliet',
      horario: 'miercoles - 11:20 a 13:01 viernes - 10:01 a 11:20',
    },
    {
      id: '2',
      nombre: 'Ingles Intermedio',
      siglas: 'INI5111',
      seccion: '015D',
      docente: 'Patrizzia Rippetti',
      horario: 'martes - 8:31 a 10:41 jueves - 8:31 a 10:41 viernes - 8:31 a 9:50',
    },
    {
      id: '3',
      nombre: 'Proceso de portafolio',
      siglas: 'APY4461',
      seccion: '015D',
      docente: 'Cristian Martinez',
      horario: 'miercoles 13:41 a 15:10',

    },
    {
      id: '4',
      nombre: 'Arquitectura',
      siglas: 'ASY4131',
      seccion: '009D',
      docente: 'Jeanette Leonelli',
      horario: 'lunes 10:41 a 12:10 - miercoles 10:01 a 11:20',
    },
    {
      id: '5',
      nombre: 'Calidad de software',
      siglas: 'CSY4111',
      seccion: '008D',
      docente: 'Julio Tapia',
      horario: 'martes 12:11 a 13:40 - jueves 11:31 a 12:50',
    },
    {
      id: '6',
      nombre: 'estadística descriptiva',
      siglas: 'MAT4140',
      seccion: '008D',
      docente: 'Patricio García',
      horario: 'lunes 13:01 a 14:20 jueves 13:01 a 14:20',
    },
    {
      id: '7',
      nombre: 'Principios-fe cristiana',
      siglas: 'PFC010',
      seccion: '019D',
      docente: 'Eugenio paredes',
      horario: 'lunes 8:31 a 9:50',
    },
    {
      id: '8',
      nombre: 'Ética para el trabajo',
      siglas: 'EAY4450',
      seccion: '006D',
      docente: 'Paula Vera',
      horario: 'martes 14:31 a 15:50',
    },
  ]
  constructor() { }

   //METODOS CUSTOM

  //METODO QUE DEVUELVE EL OBJETO COMPLETO
  getAll() {
    return [...this.asignaturas]
  }

  //METODO QUE DEVUELVE LA ASIGNATURA POR EL ID BUSCADO
  getAsignatura(id: string) {
    return {
      ...this.asignaturas.find(aux => {
        return aux.id === id
      })
    }
  }

  //METODO QUE AGREGA UNA ASIGNATURA
  addAsignatura(nombre: string, siglas: string, seccion: string) {
    this.asignaturas.push({
      nombre, siglas, seccion, id: this.asignaturas.length + 1 + ""
    })    
  }

  //METODO QUE ELIMINA UNA ASIGNATURA POR EL ID
  deleteAsignatura(id: string) {
    this.asignaturas = this.asignaturas.filter(aux => {
      return aux.id !== id
    })
  }
}
