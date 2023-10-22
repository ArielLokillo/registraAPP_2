import { Injectable } from '@angular/core';
import { Usuario } from '../pages/usuarios/usuarios.models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuario[] = [
    {
      id: '1',
      usuario: 'arie.saavedra@duocuc.cl',
      password: 'alumnoduoc1234',
      nombre: 'Ariel'
    },
    {
      id: '2',
      usuario: 'seb.henriquez@duocuc.cl',
      password: 'alumnoduoc1234',
      nombre: 'Sebastian',
    }
  ]
  constructor() { }

  //Metodos Custom

  //Metodo que devuelve el objeto completo
  getAll() {
    return [...this.usuarios]
  }

  getUsuario(id: string) {
    return {
      ...this.usuarios.find(aux => {
        return aux.id === id
      })
    }
  }

  addUsuario(usuario: string, password: string, nombre: string) {
    this.usuarios.push({
      usuario, password, nombre, id: this.usuarios.length + 1 + ""
    })
  }

  deleteUsuario(id: string) {
    this.usuarios = this.usuarios.filter(aux => {
      return aux.id !== id
    })
  }
}
