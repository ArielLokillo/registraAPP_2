import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuarios.models';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})

export class UsuariosPage implements OnInit {

  listaUsuarios: Usuario[] = [];
  buscador: Usuario[] = [];

  constructor(private router: Router,
              private usuariosService: UsuariosService) { }

  //Metodo que se ejecuta cuando se crea la pagina            
  ngOnInit() {
    this.listaUsuarios = this.usuariosService.getAll()
  }

  //METODO QUE SE EJECUTA CUANDO UNO VUELVE A LA PAGINA
  ionViewWillEnter() {
    //this.listaUsuarios = this.usuariosService.getAll()
  }

  listar() {
    this.listaUsuarios = this.usuariosService.getAll()
  }

  addUsuario() {
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

  buscarUsuario(event: any){
    const texto = event.target.value;
    if( texto && texto.trim() != '' ){
      this.listaUsuarios = this.listaUsuarios.filter((aux: any) => {
        //BUSQUE TODOS LOS POSIBLES RESULTADOSEN MANUS Y EN MINUS
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
      })
    }
  }

}
