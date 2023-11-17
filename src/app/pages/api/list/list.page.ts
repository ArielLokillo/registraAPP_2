import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuarios/usuarios.models';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/api/usuarios.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listaUsuario:any = [];

  constructor(
    private router: Router,
    //private usuariosApi: UsuariosService,
    private firestore: FirestoreService
    
    ) { }
  
  ngOnInit() {
    //this.usuariosApi.listUsuarios().subscribe((resp) => {
    //  //console.log(resp)
    //  this.listaUsuario = resp
    //  console.log(this.listaUsuario)
    //})
  }

  listar() {
    //this.usuariosApi.listUsuarios().subscribe((resp) => {
    //  //console.log(resp)
    //  let aux = JSON.stringify(resp)
    //  this.listaUsuario = JSON.parse(aux)
    //  console.log(this.listaUsuario)
    //})
    //this.firestore.getCollection('usuarios').subscribe((usuarios) => {
    //  this.listaUsuario = usuarios;
    //})
  }

  addUsuario() {
    this.router.navigate(['/apiadd']);
  }
}
