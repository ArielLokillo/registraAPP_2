import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { UsuariosService } from 'src/app/services/api/usuarios.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  //instancia que recibe la informacion
  usuario!: IUsuario

  constructor(
    private apiService:UsuariosService,
    private router: Router,
    private firestore: FirestoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.getId)
  }

  ionViewWillEnter() {
  this.getUsuario(this.getId())
  }

  getId() {
    let url = this.router.url
    let aux = url.split("/",3)
    let id = aux[2]
    return id
  }

  getUsuario(id: any) {
    this.apiService.getUsuario(id).subscribe((resp:any) => {
      this.usuario = {
        password: resp[0].password,
        usuario: resp[0].usuario
      }
    })
  }

  updateUsuario() {
    //this.apiService.updateUsuario(this.usuario).subscribe();
    const usuarioId = this.route.snapshot.paramMap.get('id');
    if (usuarioId) {
      this.firestore.updateDocument('usuarios', usuarioId ,this.usuario)
      this.router.navigate(['/apilist'])
    }
  }

}
