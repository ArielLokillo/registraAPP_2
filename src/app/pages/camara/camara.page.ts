import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(private camera: Camera) { }

  ngOnInit() {
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100, // Calidad de la imagen (0-100)
      destinationType: this.camera.DestinationType.DATA_URL, // Tipo de retorno (puede cambiar según tus necesidades)
      sourceType: this.camera.PictureSourceType.CAMERA, // Fuente: cámara
      encodingType: this.camera.EncodingType.JPEG, // Formato de imagen
      mediaType: this.camera.MediaType.PICTURE // Tipo de media (foto en este caso)
    };

    this.camera.getPicture(options).then((imageData) => {
      // Aquí puedes hacer lo que quieras con la imagen. Por ejemplo, mostrarla en una vista previa.
    }, (err) => {
      console.log("Error al tomar la foto: " + err);
    });
  }
}
