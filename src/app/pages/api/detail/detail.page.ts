import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { UsuariosService } from 'src/app/services/api/usuarios.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  usuario!: IUsuario

  asignatura = {
    id:'',
    nombre: '',
    seccion: ''
  }

  constructor(
    private firestore: FirestoreService,
    private apiService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUsuario(this.getId())
  }

  getId() {
    let url = this.router.url
    let aux = url.split("/",3)
    let id = aux[2]
    return id
  }

  getUsuario(id: string) {
    /*this.apiService.getUsuario(id).subscribe((resp:any) => {
      this.usuario = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        correo: resp[0].genero
      }
    })*/

    const usuarioId = this.route.snapshot.paramMap.get('id');

    if (usuarioId) {
      this.firestore.getUsuarioById('usuario', usuarioId)
    }
  }

  deleteUsuario() {
    //this.apiService.deleteUsuario(this.usuario).subscribe();
    const usuarioId = this.route.snapshot.paramMap.get('id')
    if (usuarioId) {
      this.firestore.deleteDocument('usuarios', usuarioId)
      this.router.navigate(['/apilist'])
    }
  }

  deleteAsignatura() {
    //this.apiService.deleteUsuario(this.usuario).subscribe();
    //this.router.navigate(['/apilist'])
  }
}
