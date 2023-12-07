import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { UsuariosService } from 'src/app/services/api/usuarios.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  //instancia creada para el test
  usuario: IUsuario = {
    usuario: '',
    password: '',
  }

  constructor(
    //private apiServices: UsuariosService,
    private router: Router,
    private firestore: FirestoreService
    
    ) { }

  ngOnInit() {
  }

  listar() {
    this.firestore.getCollection('usuarios').subscribe()
  }

  addUsuario() {
    //Capturar la longitud, para despues
    //this.apiServices.addUsuario(this.usuario).subscribe()
    this.firestore.createDocument('usuarios', this.usuario)
    this.router.navigate(['/apilist']);
  }

}
