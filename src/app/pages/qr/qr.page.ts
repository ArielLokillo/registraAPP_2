import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})

export class QrPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async mostrarAlerta() {
    this.mensajeToast("Asistencia Realizada Correctamente!");
  }

  mensajeToast(mensaje: String){
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: mensaje
    })
  }
  
  mensaje(){
    Swal.fire({
      icon: 'success',
      title: 'Asistencia Realizada!',
      text: 'Correctamente',
      heightAuto: false,
    })
  }
}
