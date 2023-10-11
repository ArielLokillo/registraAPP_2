import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../asignaturas.models';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  asignatura! : Asignatura;

  constructor(private router: Router,
              private toastController: ToastController,
              private alertController: AlertController,
              private asignaturaService: AsignaturasService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux){
        this.asignatura = this.asignaturaService.getAsignatura(aux)
      }
    })
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

  async deleteAsignatura() {
    //this.mensajeToast("ASIGNATURA ELIMINADA!");
    const alerta = await this.alertController.create({
      header: 'Eliminar la asignatura',
      message: 'Estás seguro que deseas eliminar la asignatura?',
      buttons: [
        {
          text: 'Elimina',
          handler: () => {
            if (this.asignatura && this.asignatura.id !== undefined){
              this.asignaturaService.deleteAsignatura(this.asignatura.id);
              this.router.navigate(['/asignaturas']);
              this.mensajeToast("Asignatura Eliminada!");
            } else {

            }
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.mensajeToast("Accion cancelada.");
          }
        }
      ]
    });
    await alerta.present();
    let resultado = await alerta.onDidDismiss();
  }

}
