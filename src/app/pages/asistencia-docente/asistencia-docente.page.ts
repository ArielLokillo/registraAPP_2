import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Camera, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  })};

@Component({
  selector: 'app-asistencia-docente',
  templateUrl: './asistencia-docente.page.html',
  styleUrls: ['./asistencia-docente.page.scss'],
})


export class AsistenciaDocentePage implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
