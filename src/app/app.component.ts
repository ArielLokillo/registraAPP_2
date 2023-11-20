import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Perfil', url: 'perfil-docente', icon: 'person' },
    { title: 'Api', url: 'apihome', icon: 'home' },
  ];

  public appApi = [
    { title: 'Home', url: 'apihome', icon: 'home' },
    { title: 'List', url: 'apilist', icon: 'people-circle' },
    { title: 'Add', url: 'apiadd', icon: 'people' },
    { title: 'Delete', url: 'apidelete', icon: 'people' },
    { title: 'Detail', url: 'apidetail', icon: 'analytics' },
    { title: 'Update', url: 'apiupdate', icon: 'medal' },
  ]
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private router: Router,
    private menuController: MenuController,
    private transService: TranslateService
    ) {
      this.transService.setDefaultLang('pt');
      this.transService.addLangs(['es','en','fr']);
    }

  mostrarMenu() {
    return this.router.url !== '/inicio-alumno'; //NO SE VA A MOSTRAR EN EL LOGIN
  }


  mostrarMenuApi(){
    const aux = ['apihome','apiadd','apilist','apidelete','apiupdate','apidetail']
    return aux.includes(this.router.url.substring(1)); // ELIMINAMOS EL "/"
    //return this.router.url == '/apihome';
  }


}
