import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { UsuariosService } from 'src/app/services/api/usuarios.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  //instancia creada para el test
  usuario: IUsuario = {
    usuario: 'arie.saavedra@duocuc.cl',
    password: 'alumnoduoc1234',
    nombre: 'Ariel'
  }

  constructor(
    private apiServices: UsuariosService,
    private router: Router
    
    ) { }

  ngOnInit() {
  }

  addUsuario() {
    //Capturar la longitud, para despues
    this.apiServices.addUsuario(this.usuario).subscribe()
    this.router.navigate(['/apilist']);
  }
}
