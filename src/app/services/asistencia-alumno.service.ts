import { Injectable } from '@angular/core';
import { AsistenciasAlumno } from '../pages/asistencia-alumno/asistencia-alumno.models';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasAlumnoService {

  asistenciasAlumno: AsistenciasAlumno [] = [
    {
      id: '1',
      nombre: 'Programacion aplicaciones moviles',
      siglas: 'PGY41211',
      porcentajeAsistencia: '76,6%',
    },
    {
      id: '2',
      nombre: 'Ingles Intermedio',
      siglas: 'INI5111',
      porcentajeAsistencia: '86,6%',
    },
    {
      id: '3',
      nombre: 'Proceso de portafolio',
      siglas: 'APY4461',
      porcentajeAsistencia: '100%',
    },
    {
      id: '4',
      nombre: 'Arquitectura',
      siglas: 'ASY4131',
      porcentajeAsistencia: '84,6%',
    },
    {
      id: '5',
      nombre: 'Calidad de software',
      siglas: 'CSY4111',
      porcentajeAsistencia: '100%',
    },
    {
      id: '6',
      nombre: 'Estadística descriptiva',
      siglas: 'MAT4140',
      porcentajeAsistencia: '76,2%',
    },
    {
      id: '7',
      nombre: 'Principios-fe cristiana',
      siglas: 'PFC010',
      porcentajeAsistencia: '93,7%',
    },
    {
      id: '8',
      nombre: 'Ética para el trabajo',
      siglas: 'EAY4450',
      porcentajeAsistencia: '75%',
    }
  ]

    

  constructor() { }

  getAll() {
    return [...this.asistenciasAlumno]
  }

  getAsistenciasAlumno(id: string) {
    return {
      ...this.asistenciasAlumno.find(aux => {
        return aux.id === id
      })
    }
  }
  
}
