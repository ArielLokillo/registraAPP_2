import { Component, OnInit } from '@angular/core';
import { AsignaturasAlumno } from '../asignaturas-alumno.models';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AsignaturasAlumnoService } from 'src/app/services/asignaturas-alumno.service';


@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {

  asignaturaAlumno!: AsignaturasAlumno;

  constructor(private router: Router,
              private toastController: ToastController,
              private alertController: AlertController,
              private asignaturaAlumnoService: AsignaturasAlumnoService,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux){
        this.asignaturaAlumno = this.asignaturaAlumnoService.getAsignaturaAlumno(aux)
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

  //async deleteAsignatura() {
    //this.mensajeToast("ASIGNATURA ELIMINADA!");
    //const alerta = await this.alertController.create({
      //header: 'Eliminar la asignatura',
      //message: 'Estás seguro que deseas eliminar la asignatura?',
      //buttons: [
        //{
          //text: 'Elimina',
          //handler: () => {
            //if (this.asignaturaAlumno && this.asignaturaAlumno.id !== undefined){
              //this.asignaturaAlumnoService.deleteAsignaturaAlumno(this.asignaturaAlumno.id);
              //this.router.navigate(['/asignaturas-alumno']);
              //this.mensajeToast("Asignatura Eliminada!");
            //} else {

            //}
          //}
        //},
        //{
          //text: 'Cancelar',
          //handler: () => {
            //this.mensajeToast("Accion cancelada.");
          //}
        //}
      //]
    //});
    //await alerta.present();
    //let resultado = await alerta.onDidDismiss();
  //}

  
}
