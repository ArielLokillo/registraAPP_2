import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(private asignaturaService: AsignaturasService,
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

  addAsignatura(nombre: any,siglas: any,seccion: any) {
    this.asignaturaService.addAsignatura(nombre.value,siglas.value,seccion.value);
    this.mensajeToast('Asignatura agregada!');
    this.router.navigate(['/asignaturas']);
  }
}
