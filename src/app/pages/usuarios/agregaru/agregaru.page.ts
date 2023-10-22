import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-agregaru',
  templateUrl: './agregaru.page.html',
  styleUrls: ['./agregaru.page.scss'],
})
export class AgregaruPage implements OnInit {

  constructor(private usuariosService: UsuariosService,
    private router: Router,
    private toastController: ToastController
    ) { }

  ngOnInit() {

  }

  //METODO QUE MUESTRA MENSAJES EN PANTALLA
  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present() 
  }

  addUsuario(usuario: any,password: any,correo: any) {
    this.usuariosService.addUsuario(usuario.value,password.value,correo.value);
    this.mensajeToast('Usuario agregado!');
    this.router.navigate(['/usuarios']);
  }
}
