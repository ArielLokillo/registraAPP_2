import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Perfil Alumno', url: 'perfil-alumno', icon: 'person' },
    { title: 'Perfil Docente', url: 'perfil-docente', icon: 'person' },
    { title: 'Cerrar sesión', url: 'inicio', icon: 'log-out' },
    { title: 'detalle card', url: 'detallecard', icon: 'card' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
